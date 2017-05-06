document.addEventListener('DOMContentLoaded', function() {
  var setRadioValue = function(name, value) {
    var elements = document.getElementsByName(name);

    for (var i = 0, length = elements.length; i < length; i++) {
      var element = elements.item(i);

      if (element.value === value) {
        element.checked = true;
        break;
      }
    }
  };

  setRadioValue('food', '餃子');
}, false);