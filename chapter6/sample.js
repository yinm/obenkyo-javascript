document.addEventListener('DOMContentLoaded', function() {
  var element = document.getElementById('elem');

  element.addEventListener('click', function() {
    var classes = this.className.split(' ');

    var index = classes.indexOf('highlight');
    if (index === -1) {
      classes.push('highlight');
    } else {
      classes.splice(index, 1);
    }

    this.className = classes.join(' ');
  }, false);
}, false);