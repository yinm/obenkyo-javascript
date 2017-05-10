document.addEventListener('DOMContentLoaded', function() {
  var element = document.getElementById('elem');

  element.addEventListener('click', function() {
    this.className = (this.className === 'highlight' ? '' : 'highlight');
  }, false);
}, false);