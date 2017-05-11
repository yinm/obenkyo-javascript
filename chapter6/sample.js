document.addEventListener('DOMContentLoaded', function() {
  var button = document.getElementById('button');
  var listener = function() {
    window.alert('hello world');
  };

  button.addEventListener('click', listener, false);

  button.removeEventListener('click', listener, false);
}, false);