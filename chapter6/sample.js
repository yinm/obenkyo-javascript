window.addEventListener('DOMContentLoaded', function() {
  var select = document.getElementById('food');
  var options = select.childNodes;

  for (var i = 0, length = options.length; i < length; i++) {
    var option = options.item(i);

    if (option.nodeType === 1) {
      console.log(option.value);
    }
  }
});