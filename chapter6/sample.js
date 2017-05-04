window.addEventListener('DOMContentLoaded', function() {
  var select = document.getElementById('food');
  var child = select.firstChild;

  while(child) {
    if (child.nodeType === 1) {
      console.log(child.value);
    }

    child = child.nextSibling;
  }
});