document.addEventListener('DOMContentLoaded', function() {
  var element = document.getElementById('elem');

  element.addEventListener('click', function() {
    this.classList.toggle('highlight');
  }, false);
}, false);