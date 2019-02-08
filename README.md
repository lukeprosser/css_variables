# CSS Variables & JS
Built as part of 'JavaScript30' with Wes Bos.

Enables user to update the UI via the manipulation of CSS variables using vanilla JS.

Live demo: https://lukeprosser.github.io/css_variables/

## Key Features
<ul>
  <li>3 input sources: spacing, blur and colour.</li>
  <li>Inputs are given name, value and dataset attributes for the JS to access.</li>
  <li>Styles are set on the root element (html) using CSS variables.</li>
  <li>The image and part of the header are styled using the variables.</li>
  <li>Inputs are grabbed and stored using JS.</li>
  <li>A suffix is created to append 'px' for spacing and blur.</li>
  <li>Event listeners are set up for 'change' and 'mousemove' and change the CSS variables dynamically by referencing the 'name' attribute (inserted into a template string).</li>
</ul>