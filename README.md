![Logo by Todd. R Fleeman](https://dl.dropboxusercontent.com/u/10409166/henka/henka_logo_small.png)
=====

Light, portable, responsive javascript (a side step to avoid an attack).

A single purpose library compatible with IE 6, 7, 8, 9, 10. Safari, Chrome, Firefox.

![Diagram by Todd. R Fleeman](https://dl.dropboxusercontent.com/u/10409166/henka/henka_done.png)


include henka in your page, no dependencies:
```html
<script src="henka.min.js"></script>
```

small markup to the body tag to add breakpoints:
```html
<body data-henka="[300,600,900,1200]">
```

results in a class being appended if the view-port is inside the bounds:
```html
<!-- the viewport is greater than 600px, but less than 900px -->
<body class="bp900" data-henka="[300,600,900,1200]">
```

modify the class with a custom prefix:
```html
<body class="custom900" data-henka="[300,600,900,1200]" data-henka-prefix="custom">
```

markup some css to respond accordingly:
```css
body {
    /* I am the desktop view */
    background:grey;
	color:#000;
}
body.bp1200 {
	background:yellow;
	color:#000;
}
body.bp600 {
	background:red;
	color:#000;
}
body.bp300 {
	background:blue;
	color:#000;
}
```

henka supports javascript event binding:
```javascript
henka.onUpdate(function(breakpoint){
    var breaklabel = document.getElementById('breaklabel');
    breaklabel.innerHTML = breakpoint;
});
```

support for no conflict mode:
```javascript
var _henka = henka.noConflict();
```

in action: https://dl.dropboxusercontent.com/u/10409166/henka/new_henka.html