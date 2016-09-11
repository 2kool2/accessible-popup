
// https://john-dugan.com/javascript-debounce/
var debounce=function(e,t,n){var a;return function(){var r=this,i=arguments,o=function(){a=null,n||e.apply(r,i)},s=n&&!a;clearTimeout(a),a=setTimeout(o,t||200),s&&e.apply(r,i)}};


(function (window, d, debounce) {

  "use strict";

  // Modal pop-up window iframe version 4.1 22-08-2016

  // v4.1 - Launch from an anchor link, button or any other not recommended object
  // Modal title text set by data-modalTitle, image alt or link text.
  // Any object with .-modal (modalName) with have .-modal-open appended === "-" + modalName + contentClass

  // To do - under consideration:
  // make lightbox the modal section and code around it?
  // perhaps <section class=modal = lightbox
  //            <div =modal_inner = modal?
  // lightbox doesnt need to be in keychain just add onclick to close

  // To do:
  //    Option to set an ideal pop-up size eg an image
  //      - maintain the aspect ratio
  //      - centre it
  //    Remove iframe to stop a video playing?


  // Requires:
  //    SVG definitions for: #icon-cross, #icon-loading
  //    External functions: debounce()

  // Assumptions:
  //    First object in modal is the modal title
  //    Last object is the modal close link


  // defaults
  var modalName = "modal";
  var lightboxClass = "lightbox";
  var openClass = "-" + modalName + "-open";
  //var modalDesc = "<kbd>tab</kbd> or <kbd>shift + tab</kbd> to move focus.";
  var modalDesc = "Tab or Shift + Tab to move focus.";


  var _setContentObjs = function (isModalOpen) {
    var objs = d.getElementsByClassName("-" +modalName);
    var i = objs.length;
    while (i--) {
      if (!!isModalOpen) {
        objs[i].classList.add(openClass);
        if (objs[i].tagName.toLowerCase !== "body") {
          objs[i].setAttribute("aria-hidden", "true");
        }
      } else {
        objs[i].classList.remove(openClass);
        objs[i].removeAttribute("aria-hidden");
      }
    }
    return !!isModalOpen;
  };


  var _closeModal = function (e) {
    var count = e.target.count; // = lightbox, modal (ESC key), close btn
    var modalSection = d.getElementById(modalName + "_" + count);
    var lightbox = d.getElementById(modalName + "_" + count + "_" + lightboxClass);
    var modalLink;
    if (modalSection) {
      modalSection.setAttribute("aria-hidden", "true");
      lightbox.className = lightbox.className.replace(lightboxClass + "-on", "");

      _setContentObjs(!modalSection.getAttribute("aria-hidden"));
      modalLink = d.getElementById(modalSection.returnId);
      d.body.classList.remove(openClass);
      modalLink.focus();
    }
  };


  var _getModalSize = function (modalSection) {
    var clone = modalSection.cloneNode(true);
    var size = {};
    clone.className = modalName;
    clone.setAttribute("style", "position:fixed;visibility:hidden;transform: none");
    modalSection.parentElement.appendChild(clone);
    size.width = clone.clientWidth; // more performant than getBoundingClientRect
    size.height = clone.clientHeight; // more performant than getBoundingClientRect
    modalSection.parentElement.removeChild(clone);
    return size;
  };


  var _resizeIframes = function () {

    var size;
    var iframes;
    var ii;

    var modals = d.getElementsByClassName(modalName);
    var i = modals.length;

    while (i--) {

      size = _getModalSize(modals[i]);

      iframes = modals[i].getElementsByClassName(modalName + "_iframe");
      ii = iframes.length;

      while (ii--) {
        iframes[ii].width = size.width;
        iframes[ii].height = size.height;
      }
    }
  };


  var _addIframe = function (modalSection) {

    var size;
    var close_lnk;
    var frames = modalSection.getElementsByClassName(modalName + "_iframe");
    var iframe;
    if (!frames[0]) {

      iframe = d.createElement("iframe");

      // Don't display iframe until it's content is ready
      iframe.addEventListener("load", function () {
        iframe.classList.add(modalName + "_iframe-on");
      }, false);

      iframe.src = modalSection.modalSrc;
      iframe.className = modalName + "_iframe";

      size = _getModalSize(modalSection);
      iframe.width = size.width;
      iframe.height = size.height;

      iframe.setAttribute("frameborder", 0);
      iframe.setAttribute("allowfullscreen", true);

      // Add iframe before the close button
      close_lnk = d.getElementById(modalName + "_" + modalSection.count + "_lnk_close");
      modalSection.insertBefore(iframe, close_lnk);

    }
  };


  var _getTarget = function (obj) {
    var target = obj;
    var isBodyTag = obj.tagName.toLowerCase() === "body";
    if (isBodyTag) {
      return false;
    }
    if (!obj.modalSrc) {
      target = _getTarget(obj.parentElement);
    }
    return target;
  }


  var _openModal = function (e) {

    e.preventDefault();

    var target = _getTarget(e.target);

    if (target) {

      var count = target.count;
      var tempId = modalName + "_" + count;
      var tempLightboxClass = modalName + "_" + lightboxClass;
      var modalSection = d.getElementById(tempId);
      var lightbox = d.getElementById(tempId + "_" + lightboxClass);

      if (modalSection && lightbox) {
        if (!lightbox.className.match(tempLightboxClass + "-on")) {
          lightbox.className += " " + tempLightboxClass + "-on";
        }
        modalSection.setAttribute("aria-hidden", "false");
        _addIframe(modalSection);

        _setContentObjs(!!modalSection.getAttribute("aria-hidden"));

        d.body.classList.add(openClass);
        d.getElementById(modalName + "_" + count + "_title").focus();
      }
    }
  };


  var _keydown_openerObj = function (e) {
    // enter or space from the opener object
    if (e.which === 13 || e.which === 32) {
        e.preventDefault();
        _openModal(e);
    }
  };


  var _addOpenModalLinkAttr = function (modalLink) {
    modalLink.id = modalLink.id || "modal_" + modalLink.count + "_lnk";
    modalLink.setAttribute("aria-controls", modalName + "_" + modalLink.count);

    // test if it's not a button
    var tag = modalLink.tagName.toLowerCase();
    if (tag !== "button") {
      modalLink.setAttribute("aria-role", "button");
      modalLink.addEventListener("keydown", _keydown_openerObj, false);
    }

    // click only requires space and enter activtion too
    if (tag !== "a" || "button") {
      modalLink.tabIndex = 0;
    }

    modalLink.addEventListener("click", _openModal, false);
  };


  var _keydown_modal = function (e) {

    var target = e.target;

    // ESC key on anything actionable
    if (e.which === 27) {
      _closeModal(e);
    }

    // tab key and shift on the h1
    if (e.which === 9 && e.shiftKey) {
      if (target.classList.contains(modalName + "_title")) {
        e.preventDefault();
        //focus on last object in modal (close btn)
        d.getElementById(modalName + "_" + e.target.count + "_lnk_close").focus();
      }
    }

    // tab key and not shift on the close link.
    if (e.which === 9 && !e.shiftKey) {
      if (target.classList.contains(modalName + "_lnk-close")) {
        e.preventDefault();
        //focus on first object in modal - or should it be the modal? Requires testing
        d.getElementById(modalName + "_" + e.target.count + "_title").focus();
      }
    }

    // enter or space on the close link - why again??
    if (e.which === 13 || e.which === 32) {
      if (target.classList.contains(modalName + "_lnk-close")) {
        e.preventDefault();
        _closeModal(e);
      }
    }
  };


  var _getTitleText = function (modalLink) {
    var alt = "";
    var imgs = modalLink.getElementsByTagName("img");
    if (imgs && imgs[0]) {
      alt = imgs[0].alt;
    }
    return modalLink.getAttribute("data-modalTitle") || alt || modalLink.textContent;
  };


  var _getModalTitle = function (modalLink) {
    var title = d.createElement("h1");
    title.id = modalName + "_" + modalLink.count + "_title";
    title.className = modalName + "_title";
    title.tabIndex = 0;
    title.textContent = _getTitleText(modalLink);
    title.count = modalLink.count;
    title.addEventListener("keydown", _keydown_modal, false);
    return title;
  };


  var _getModalSVG = function (icon, clss, title) {
    var svg = d.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.classList.add(clss);
    if (title) {
      var t = d.createElementNS("http://www.w3.org/2000/svg", "title");
      t.textContent = title;
      svg.appendChild(t);
    }
    var use = d.createElementNS("http://www.w3.org/2000/svg", "use");
    use.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + icon);
    svg.appendChild(use);
    return svg;
  };


  var _getModalDesc = function (modalLink) {
    var desc = d.createElement("p");
    desc.id = modalName + "_" + modalLink.count + "_desc";
    desc.className = modalName + "_desc";
    desc.tabIndex = 0;
    desc.innerHTML = modalLink.getAttribute("data-modalDesc") || modalDesc;
    desc.count = modalLink.count;
    desc.addEventListener("keydown", _keydown_modal, false);
    return desc;
  };


  var _getModalCloseLink = function (modalLink) {
    var link = d.createElement("a");
    link.id = modalName + "_" + modalLink.count + "_lnk_close";
    link.className = modalName + "_lnk-close";
    link.tabIndex = 0;
    link.appendChild(_getModalSVG("icon-cross", "svg-close", "Close modal"));
    link.count = modalLink.count;
    link.addEventListener("click", _closeModal, false);
    link.addEventListener("keydown", _keydown_modal, false);
    return link;
  };


  var _addModalSection = function(modalLink) {
    var section = d.createElement("section");
    section.id = modalName + "_" + modalLink.count;
    section.count = modalLink.count;
    section.returnId = modalLink.id;
    section.className = modalName;
    section.setAttribute("aria-hidden", "true");

    // should be on the activating link?
    section.setAttribute("aria-labelledby", modalName +"_" + modalLink.count + "_title");
    section.setAttribute("aria-describedby", modalName +"_" + modalLink.count + "_desc");

    section.setAttribute("role", "dialog");
    section.modalSrc = modalLink.modalSrc;

    section.appendChild(_getModalTitle(modalLink));
    section.appendChild(_getModalSVG("icon-loading", "svg-loading", "Loading"));
    section.appendChild(_getModalDesc(modalLink));
    section.appendChild(_getModalCloseLink(modalLink));

    d.body.appendChild(section);
  };


  var _addLightbox = function (modalLink) {

    var count = modalLink.count;
    var lightboxDiv = d.createElement("div");

    lightboxDiv.id = modalName + "_" + count + "_" + lightboxClass;
    lightboxDiv.className = modalName + "_" + lightboxClass;
    lightboxDiv.count = count;
    lightboxDiv.returnId = modalLink.id;

    // mouse / touch only
    lightboxDiv.addEventListener("click", _closeModal, false);

    d.body.appendChild(lightboxDiv);
  };


  var configuration = function (cfg) {
    modalName = cfg.modalName || modalName;

    lightboxClass = cfg.lightboxClass || lightboxClass;

    // any object with a class -modal will have the class -modal-open added when the modal is open.
    //openClass = "-" + modalName + (cfg.openClass || "-open");
    openClass = cfg.openClass ? "-" + modalName + cfg.openClass : openClass;
  };


  var initialise = function (cfg) {

    configuration(cfg);

    var modalSrc;
    var dataModals = d.querySelectorAll("[data-" + modalName + "]");

    if (dataModals) {
      var i = dataModals.length;
      while (i--) {

        // Link href and iframe src are not always the same!
        modalSrc = false;

        // use the href
        if (dataModals[i].hasAttribute("href")) {
          modalSrc = dataModals[i].href;
        }

        // overwrite src with data-modal content when available
        if (dataModals[i].getAttribute("data-modal").length) {
          modalSrc = dataModals[i].getAttribute("data-modal");
        }

        if (modalSrc) {
          dataModals[i].modalSrc = modalSrc;
          dataModals[i].count = i;
          _addOpenModalLinkAttr(dataModals[i]);
          _addModalSection(dataModals[i]);
          _addLightbox(dataModals[i]);
        }

      }

      window.addEventListener("resize", debounce(_resizeIframes, 250, false));

    }

  };

  initialise({
    modalName : "modal",  // class name of modal, also used as the base for all classes used except on SVGs.
    openClass : "-open", // is default ("-" + modaName automatically prepended)
    lightboxClass : "lightbox" // is default (modaName + "_" automatically prepended)
  });

}(window, document, debounce));
