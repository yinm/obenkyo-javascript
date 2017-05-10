document.addEventListener('DOMContentLoaded', function() {
  var element = document.getElementById('elem');

  element.addEventListener('mouseover', function() {
    this.className = 'highlight';
  }, false);

  element.addEventListener('mouseout', function() {
    this.className = '';
  }, false);
}, false);