document.addEventListener('DOMContentLoaded', function() {
  var setCheckValue = function(name, value) {
    var elements = document.getElementsByName(name);

    for (var i = 0, length = elements.length; i < length; i++) {
      var element = elements.item(i);

      if (value.indexOf(element.value) > -1) {
        element.checked = true;
      }
    }
  };

  setCheckValue('food', ['餃子', '焼肉']);
}, false);