window.addEventListener('DOMContentLoaded', function() {
  var select = document.getElementById('food');
  var elementChild = select.firstElementChild;

  while (elementChild) {
    console.log(elementChild.value);

    elementChild = elementChild.nextElementSibling;
  }
});