henka
=====

Light weight, ultra portable, responsive javascript library, responsive all the things.

Small compact, and single purpose - add classes to elements based on a breakpoint. Nothing more.

Compatible IE 6, 7, 8, 9, 10. Safari, Chrome, Firefox.

only small markup to the body tag to add breakpoints:
```html
<body data-henka="[300,600,900,1200]">
```

support for no conflict mode:
```javascript
var _henka = henka.noConflict();
```

henka supports javascript event binding:
```javascript
henka.onUpdate(function(breakpoint){
    var breaklabel = document.getElementById('breaklabel');
    breaklabel.innerHTML = breakpoint;
});
```

in action: https://dl.dropboxusercontent.com/u/10409166/henka/new_henka.html