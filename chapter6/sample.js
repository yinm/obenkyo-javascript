document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('button').addEventListener('click', function() {
    var result = [];
    var foods = document.getElementsByName('food');

    for (var i = 0, length = foods.length; i < length; i++) {
      var food = foods.item(i);
      if (food.checked) {
        result.push(food.value);
      }
    }
    window.alert(result.toString());
  }, false);
}, false);