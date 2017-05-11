document.addEventListener('DOMContentLoaded', function() {
  var button = document.getElementById('button');

  button.onclick = function() {
    window.alert('hello world');
  };

  button.onclick = null;
}, false);