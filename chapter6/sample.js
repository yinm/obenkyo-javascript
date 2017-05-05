window.addEventListener('DOMContentLoaded', function() {
  var select = document.getElementById('food');
  var lastElementChild = select.lastElementChild;

  while (lastElementChild) {
    console.log(lastElementChild.value);

    lastElementChild = lastElementChild.previousElementSibling;
  }
});