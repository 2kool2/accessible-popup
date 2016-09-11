
<h1><a href="https://websemantics.uk/articles/accessible-modal-dialog-popup-iframe/">Accessible modal dialog pop-up iframe (v4)</a></h1>

Uses an anchor to launch a modal pop-up which is then populated with an <code>iframe</code>.<br>
  This version allows modal title and description to be user defined from the HTML.

CodePen demo: <a href="https://codepen.io/2kool2/pen/LkaXay">WCAG ARIA accessible pop-up iframe modal dialog (v4)</a>

Production ready version (encapuslated with external configuration and instantiation): <a href="https://websemantics.uk/articles/accessible-modal-dialog-popup-iframe/demo/">Modal Dialog demo</a>.


<h2>Examples</h2>

As link: &nbsp;
  <a
     class="lnk_modal-open"
     data-modalTitle=""
     data-modalDesc=""
     href="https://www.google.com/maps/place/147+Wardour+St,+Soho,+London+W1F+8WD,+UK/@51.514197,-0.134724,16z/data=!4m5!3m4!1s0x487604d357825039:0xf0c170d8fa918a9b!8m2!3d51.5141967!4d-0.1347244?hl=en-GB"
     data-modal="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4175.8218601402605!2d-0.1390235133502716!3d51.51397674271494!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604d357825039%3A0xf0c170d8fa918a9b!2s147+Wardour+St%2C+Soho%2C+London+W1F+8WD%2C+UK!5e0!3m2!1sen!2sin!4v1468326690641">
    Wine bar location (interactive map)
  </a>


As button: &nbsp;
  <button
          data-modal="https://www.google.com/maps/d/embed?mid=zA9_X1Tfn01s.kNe-p7G1WCjk">
    Carrier bag (interactive map)
  </button>


As an image link: &nbsp;
  <a
     class="lnk_modal-open lnk_modal-img"
     href="https://www.google.com/maps/place/147+Wardour+St,+Soho,+London+W1F+8WD,+UK/@51.514197,-0.134724,16z/data=!4m5!3m4!1s0x487604d357825039:0xf0c170d8fa918a9b!8m2!3d51.5141967!4d-0.1347244?hl=en-GB"
     data-modal="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4175.8218601402605!2d-0.1390235133502716!3d51.51397674271494!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604d357825039%3A0xf0c170d8fa918a9b!2s147+Wardour+St%2C+Soho%2C+London+W1F+8WD%2C+UK!5e0!3m2!1sen!2sin!4v1468326690641">
    <img class="img_modal-open" src="img/map.png" alt="Tesco finest* wine bar location">
  </a>


As an image: &nbsp;
    <img
         src="img/map.png"
         alt="Tesco finest* wine bar location"
         data-modal="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4175.8218601402605!2d-0.1390235133502716!3d51.51397674271494!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604d357825039%3A0xf0c170d8fa918a9b!2s147+Wardour+St%2C+Soho%2C+London+W1F+8WD%2C+UK!5e0!3m2!1sen!2sin!4v1468326690641">



<h2>In use</h2>

<ul>
  <li>Add attribute <code>data-modal</code> to any link (best practice), or button, or tag (not recommended) to indicate "Launch in modal".</li>
  <li>Give <code>data-modal</code> the url of the <code>iframe</code> <code>src</code> if it's different to the link <code>href</code>.</li>
  <li>The modal <code>title</code> may be taken from the optional data attribute <code>data-title=""</code>, or the link text, or the image <code>alt</code> text.</li>
  <li>The modal description may also be overriden by the data attribute <code>data-desc</code>.</li>
</ul>

Example web page in a popup:
  <a
     class="lnk_modal-open"
     href="https://websemantics.uk/articles/accessible-modal-dialog-popup-iframe/"
     data-modal>
    webSemantics article (web page)
  </a>



<h2>Caveats</h2>

<ul>
  <li>This method neither raises or lowers accessibility barriers caused by the <code>iframe</code> content.</li>
  <li>Be absolutely certain the <code>iframe</code> doesn't trap the keyboard.</li>
</ul>


<h2>Features</h2>

<ul>
  <li><abbr title="Web Content Accessibility Guidelines">WCAG</abbr> 2 level AA with <abbr title="Accessible Rich Internet Applications">ARIA</abbr> support</li>
  <li>Fully responsive, mobile-first approach.</li>
  <li>Lightweight, less than 1.8 KB to the browser with 1.5 KB CSS.</li>
  <li>When opening; the focus is moved to modal content.</li>
  <li>When closing; the focus is moved back to the activating link.</li>
  <li>While open; the <kbd>Tab</kbd> scope is limited to the modal content.</li>
  <li>While open; the document body is frozen (no scroll, no keychain).</li>
  <li>While open; the <kbd>Esc</kbd> key closes the modal while on any focusable object (but not while inside the <code>iframe</code>).</li>
  <li>All customisations are via inline HTML attributes and CSS.<br>No need to edit JavaScript.</li>
  <li>Just a link is presented when JavaScript is unavailable.</li>
</ul>


<h2>Current status</h2>

14/08/2016 - In cross-browser, cross-platform and cross-device testing.<br>To be followed with full access testing by <a href="http://www.digitalaccessibilitycentre.org/">Digital Accessibility Centre</a>.

Currently resolving modal width &amp; height for a:
  <a
     class="lnk_modal-open"
     href="https://pbs.twimg.com/profile_banners/752911976876179456/1468343984/1500x500"
     data-modal>
    Pop-up image
  </a>


Video doesn't stop / pause on exit:
  <a
     class="lnk_modal-open"
     href="https://www.youtube.com/embed/lOUjUirKzM0"
     data-modal>
    Pop-up YouTube video
  </a><br>Investigating&hellip;<br>In the meantime use this instead:
  <a href="http://codepen.io/2kool2/pen/dXEwEd">Button to embed video iframe (v2)</a>.



<h2>Based on the workings of:</h2>

<ul>
  <li>Greg Kraus: <a href="https://accessibility.oit.ncsu.edu/training/aria/modal-window/version-3/">The incredible accessible modal window v3</a></li>
  <li>Marco Zehe: <a href="https://www.marcozehe.de/2015/02/05/advanced-aria-tip-2-accessible-modal-dialogs/">Accessible modal dialogs</a></li>
  <li>Heydonworks: <a href="http://heydonworks.com/practical_aria_examples/#warning-dialog">Warning dialog</a></li>
</ul>


<h2>Alternatives</h2>

Let's mention alternate versions of modal pop-ups out there:
<ul>

  <li><a href="http://www.humaan.com/modaal/">Modaal</a> - The best I've seen though kicks in at 17 KB. Does it all except allow for different link <code>href</code> to a modal <code>iframe</code> src (as per this example). If you need Accessibility with bells &amp; whistles this is <strong>recommended</strong>. [Nicked some of your feature docs, thanks].</li>

  <li><a href="https://robinparisi.github.io/tingle/">Tingle js</a> - Love the UX feel of this one but Accessibility not the strong point. Code weight (3 kb loaded) and a style I'm envious of. Appreciated the prototype technique over my purely functional. [Nicked the lightbox <code>cursor</code>, thanks].</li>

  <li><a href="http://thephuse.github.io/vanilla-modal/">Vanilla modal</a> - Loved the lightweight (&lt; 4 KB loaded inc CSS) simplicity, hated the modals loading before interaction, sadly ignores keyboard-only users too.</li>

  <li><a href="https://frend.co/components/dialogmodal/">DialogModal</a> - Very basic modal dialog but with good Accessibility. Everything preloaded loaded in the HTML and uses ES2015.</li>

  <li>This version 4 (&lt; 4 KB inc CSS). Uses <code>classList</code> so limited to IE10+.</li>

</ul>

All in all nothing is ever perfect, just avoid using a heavy weight library / framework for something this simple.

</main>


CodePen demo: <a href="https://codepen.io/2kool2/pen/LkaXay">WCAG ARIA accessible pop-up iframe modal dialog (v4)</a>

Mike Foskett @ <a href="https://websemantics.uk/">webSemantics</a>
