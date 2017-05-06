document.addEventListener('DOMContentLoaded', function() {
  var setListValue = function(name, value) {
    var options = document.getElementById(name);

    for (var i = 0, length = options.length; i < length; i++) {
      var option = options.item(i);

      if (value.indexOf(option.value) > -1) {
        option.selected = true;
      }
    }
  };

  setListValue('food', ['餃子', '焼肉']);
}, false);