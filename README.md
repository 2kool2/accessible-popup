
#<a href="https://websemantics.uk/articles/accessible-modal-dialog-popup-iframe/">Accessible modal dialog pop-up iframe (v4)</a>

Uses an anchor to launch a modal pop-up which is then populated with an <code>iframe</code> in an accessible manner.<br>
This version allows modal source, title and description to be user-defined in the HTML.

<strong>Demo: <a href="https://codepen.io/2kool2/pen/LkaXay">WCAG ARIA accessible pop-up iframe modal dialog (v4)</a></strong>

<br>
##Features

* <abbr title="Web Content Accessibility Guidelines">WCAG</abbr> 2 level AA with <abbr title="Accessible Rich Internet Applications">ARIA</abbr> support
* Fully responsive, mobile-first approach.<br>Modal and <code>iframe</code>(s) resize with the window.
* Lightweight, less than 1.8 KB to the browser with 1.5 KB CSS.
* When opening; the focus is moved to modal content.
* When closing; the focus is moved back to the activating link.
* While open; the <kbd>Tab</kbd> scope is limited to the modal content.
* While open; the document body is frozen (no scroll, no keychain).
* While open; the <kbd>Esc</kbd> key closes the modal while on any focusable object (but not while inside the <code>iframe</code>).
* Clicking on the lightbox also closes the modal.
* All customisations are via inline HTML attributes and CSS.<br>No need to edit JavaScript.
* Just a link is presented when JavaScript is unavailable.


<br>
##In use

* Add attribute <code>data-modal</code> to any link (best practice), or button, or tag (not recommended) to indicate "Launch in modal".
* Give <code>data-modal</code> the URL of the <code>iframe</code> <code>src</code> if it's different to the link <code>href</code>.
* The modal <code>title</code> may be user-defined by the optional data attribute <code>data-title=""</code>.
  <br>Alternatively it will be taken from the link text, or the image <code>alt</code> text.
* The modal description may also be user-defined by the data attribute <code>data-desc</code>.


<br>
##To use

Link to the stylesheet:
```html
<link rel="stylesheet" href="css/styles.css">
```

Add data attributes to the link:
```html
<a
  class="lnk_modal-open" href="https://www.google.com/maps/place/147+Wardour+St,+Soho,+London+W1F+8WD,+UK/@51.514197,-0.134724,16z/data=!4m5!3m4!1s0x487604d357825039:0xf0c170d8fa918a9b!8m2!3d51.5141967!4d-0.1347244?hl=en-GB"
  data-modal="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4175.8218601402605!2d-0.1390235133502716!3d51.51397674271494!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604d357825039%3A0xf0c170d8fa918a9b!2s147+Wardour+St%2C+Soho%2C+London+W1F+8WD%2C+UK!5e0!3m2!1sen!2sin!4v1468326690641"

  data-modalTitle="Map location"
  data-modalDesc=""
          >
            Wine bar location (interactive map)
</a>
```

Add the script:
```html
<script src="js/accessible-popup.4.1.min.js"></script>
```


<br>
##Caveats

* This method neither raises or lowers accessibility barriers caused by the <code>iframe</code> content.
* Be absolutely certain the <code>iframe</code> <b>doesn't trap the keyboard.</b>


<br>
##Current status

14/08/2016 - In cross-browser, cross-platform and cross-device testing.<br>
To be followed with full access testing by <a href="http://www.digitalaccessibilitycentre.org/">Digital Accessibility Centre</a>.

Currently resolving modal width & height for pop-up images, and video doesn't pause / stop on modal close.
<br>Investigating&hellip;
<br>In the meantime, for video, use this instead:
  <a href="http://codepen.io/2kool2/pen/dXEwEd">Embed video iframe</a>.


<br>
##Based on the workings of:

* Greg Kraus: <a href="https://accessibility.oit.ncsu.edu/training/aria/modal-window/version-3/">The incredible accessible modal window v3</a>
* Marco Zehe: <a href="https://www.marcozehe.de/2015/02/05/advanced-aria-tip-2-accessible-modal-dialogs/">Accessible modal dialogs</a>
* Heydonworks: <a href="http://heydonworks.com/practical_aria_examples/#warning-dialog">Warning dialog</a>



<br>
##Alternatives

Let's mention alternate versions of modal pop-ups out there:

* <a href="http://www.humaan.com/modaal/">Modaal</a> - The best I've seen though kicks in at 17 KB. Does it all except allow for different link <code>href</code> to a modal <code>iframe</code> src (as per this example). If you need Accessibility with bells &amp; whistles this is <strong>recommended</strong>. [Nicked some of your feature docs, thanks].

* <a href="https://robinparisi.github.io/tingle/">Tingle js</a> - Love the UX feel of this one but Accessibility not the strong point. Code weight (3 kb loaded) and a style I'm envious of. Appreciated the prototype technique over my purely functional. [Nicked the lightbox <code>cursor</code>, thanks].

* <a href="http://thephuse.github.io/vanilla-modal/">Vanilla modal</a> - Loved the lightweight (&lt; 4 KB loaded inc CSS) simplicity, hated the modals loading before interaction, sadly ignores keyboard-only users too.

* <a href="https://frend.co/components/dialogmodal/">DialogModal</a> - Very basic modal dialog but with good Accessibility. Everything preloaded loaded in the HTML and uses ES2015.

* This version 4 (&lt; 4 KB inc CSS). Uses <code>classList</code> so limited to IE10+.



<br>
All in all nothing is ever perfect, just avoid using a heavy weight library / framework for something this simple.



CodePen demo: <a href="https://codepen.io/2kool2/pen/LkaXay">WCAG ARIA accessible pop-up iframe modal dialog (v4)</a>

Encapuslated with external configuration and instantiation: <a href="https://websemantics.uk/articles/accessible-modal-dialog-popup-iframe/demo/">Modal Dialog demo</a>.

Mike Foskett @ <a href="https://websemantics.uk/">webSemantics</a>
