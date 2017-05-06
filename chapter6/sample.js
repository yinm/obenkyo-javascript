document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('button').addEventListener('click', function() {
    var toggle = document.getElementById('toggle');

    if (toggle.checked) {
      console.log(toggle.value);
    } else {
      console.log('チェックされていません');
    }
  }, false);
}, false);