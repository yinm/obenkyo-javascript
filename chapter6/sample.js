document.addEventListener('DOMContentLoaded', function() {
  var element = document.getElementById('elem');

  element.addEventListener('mouseover', function() {
    this.style.backgroundColor = 'Yellow';
  }, false);

  element.addEventListener('mouseout', function() {
    this.style.backgroundColor = '';
  }, false);
}, false);