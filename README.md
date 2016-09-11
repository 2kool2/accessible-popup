
#<a href="https://websemantics.uk/articles/accessible-modal-dialog-popup-iframe/">Accessible modal dialog pop-up iframe (v4)</a>

Uses an anchor to launch a modal pop-up which is then populated with an <code>iframe</code> in an accessible manner.<br>
This version allows modal source, title and description to be user-defined in the HTML.

<strong>Demo: <a href="https://codepen.io/2kool2/pen/LkaXay">WCAG ARIA accessible pop-up iframe modal dialog (v4)</a></strong>

<br>
##Features

+<abbr title="Web Content Accessibility Guidelines">WCAG</abbr> 2 level AA with <abbr title="Accessible Rich Internet Applications">ARIA</abbr> support
+Fully responsive, mobile-first approach.
+Lightweight, less than 1.8 KB to the browser with 1.5 KB CSS.
+When opening; the focus is moved to modal content.
+When closing; the focus is moved back to the activating link.
+While open; the <kbd>Tab</kbd> scope is limited to the modal content.
+While open; the document body is frozen (no scroll, no keychain).
+While open; the <kbd>Esc</kbd> key closes the modal while on any focusable object (but not while inside the <code>iframe</code>).
+All customisations are via inline HTML attributes and CSS.<br>No need to edit JavaScript.
+Just a link is presented when JavaScript is unavailable.


<br>
##In use


+Add attribute <code>data-modal</code> to any link (best practice), or button, or tag (not recommended) to indicate "Launch in modal".
+Give <code>data-modal</code> the URL of the <code>iframe</code> <code>src</code> if it's different to the link <code>href</code>.
+The modal <code>title</code> may be user-defined by the optional data attribute <code>data-title=""</code>.
  Alternatively it will be taken from the link text, or the image <code>alt</code> text.
+The modal description may also be user-defined by the data attribute <code>data-desc</code>.



<br>
##Caveats


+This method neither raises or lowers accessibility barriers caused by the <code>iframe</code> content.
+<b>Be absolutely certain the <code>iframe</code> doesn't trap the keyboard.</b>



<br>
##Current status

14/08/2016 - In cross-browser, cross-platform and cross-device testing.<br>
To be followed with full access testing by <a href="http://www.digitalaccessibilitycentre.org/">Digital Accessibility Centre</a>.

Currently resolving modal width & height for pop-up images.
Video doesn't pause / stop on modal close. Investigating&hellip;
In the meantime, for video, use this instead:
  <a href="http://codepen.io/2kool2/pen/dXEwEd">Embed video iframe</a>.



<br>
##Based on the workings of:


+Greg Kraus: <a href="https://accessibility.oit.ncsu.edu/training/aria/modal-window/version-3/">The incredible accessible modal window v3</a>
+Marco Zehe: <a href="https://www.marcozehe.de/2015/02/05/advanced-aria-tip-2-accessible-modal-dialogs/">Accessible modal dialogs</a>
+Heydonworks: <a href="http://heydonworks.com/practical_aria_examples/#warning-dialog">Warning dialog</a>



<br>
##Alternatives

Let's mention alternate versions of modal pop-ups out there:


+<a href="http://www.humaan.com/modaal/">Modaal</a> - The best I've seen though kicks in at 17 KB. Does it all except allow for different link <code>href</code> to a modal <code>iframe</code> src (as per this example). If you need Accessibility with bells &amp; whistles this is <strong>recommended</strong>. [Nicked some of your feature docs, thanks].

+<a href="https://robinparisi.github.io/tingle/">Tingle js</a> - Love the UX feel of this one but Accessibility not the strong point. Code weight (3 kb loaded) and a style I'm envious of. Appreciated the prototype technique over my purely functional. [Nicked the lightbox <code>cursor</code>, thanks].

+<a href="http://thephuse.github.io/vanilla-modal/">Vanilla modal</a> - Loved the lightweight (&lt; 4 KB loaded inc CSS) simplicity, hated the modals loading before interaction, sadly ignores keyboard-only users too.

+<a href="https://frend.co/components/dialogmodal/">DialogModal</a> - Very basic modal dialog but with good Accessibility. Everything preloaded loaded in the HTML and uses ES2015.

+This version 4 (&lt; 4 KB inc CSS). Uses <code>classList</code> so limited to IE10+.



<br>
All in all nothing is ever perfect, just avoid using a heavy weight library / framework for something this simple.



CodePen demo: <a href="https://codepen.io/2kool2/pen/LkaXay">WCAG ARIA accessible pop-up iframe modal dialog (v4)</a>

Encapuslated with external configuration and instantiation: <a href="https://websemantics.uk/articles/accessible-modal-dialog-popup-iframe/demo/">Modal Dialog demo</a>.

Mike Foskett @ <a href="https://websemantics.uk/">webSemantics</a>
