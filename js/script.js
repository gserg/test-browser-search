(function() {
  'use strict';

  var buttons = document.querySelectorAll('.toggle-method');
  var wrapper = document.querySelector('.wrapper');
  var currentMethod = 'visibility';

  for (var i = 0; i < buttons.length; i += 1) {
    addEventListener(buttons[i], 'click', toggleMethod);
  }

  function toggleMethod(event) {
    var button = event.target || event.srcElement; /* IE8+ */
    var oldMethod = currentMethod;
    var method = button.getAttribute('data-method'); /* IE8+ */

    currentMethod = method;
    removeClass(wrapper, 'wrapper_' + oldMethod);
    addClass(wrapper, 'wrapper_' + currentMethod);
  }

  /* IE8+ */
  function addEventListener(el, eventName, handler) {
    if (el.addEventListener) {
      el.addEventListener(eventName, handler);
    } else {
      el.attachEvent('on' + eventName, function(event) {
        handler.call(el, event);
      });
    }
  }

  function addClass(o, c) {
    var re = new RegExp('(^|\\s)' + c + '(\\s|$)', 'g');
    if (re.test(o.className)) {
      return;
    }
    o.className = (o.className + ' ' + c).replace(/\s+/g, ' ').replace(/(^ | $)/g, '');
  }

  function removeClass(o, c) {
    var re = new RegExp('(^|\\s)' + c + '(\\s|$)', 'g');
    o.className = o.className.replace(re, '$1').replace(/\s+/g, ' ').replace(/(^ | $)/g, '');
  }
})();
