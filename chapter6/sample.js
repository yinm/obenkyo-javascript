document.addEventListener('DOMContentLoaded', function() {
  var getRadioValue = function(name) {
    var result = '';
    var elements = document.getElementsByName(name);

    for (var i = 0, length = elements.length; i < length; i++) {
      var element = elements.item(i);

      if (element.checked) {
        result = element.value;
        break;
      }
    }

    return result;
  };

  document.getElementById('button').addEventListener('click', function() {
    window.alert(getRadioValue('food'));
  }, false);
}, false);