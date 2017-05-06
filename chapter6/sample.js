document.addEventListener('DOMContentLoaded', function() {
  var getSelectValue = function(name) {
    var result = [];
    var options = document.getElementById(name).options;

    for (var i = 0, length = options.length; i < length; i++) {
      var option = options.item(i);

      if (option.selected) {
        result.push(option.value);
      }
    }
    return result;
  };

  document.getElementById('button').addEventListener('click', function() {
    window.alert(getSelectValue('food'));
  }, false);
}, false);