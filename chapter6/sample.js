document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('button').addEventListener('click', function() {
    var name = document.getElementById('name');
    console.log(name.value);
    name.value = '初期化するさん';
  }, false);
}, false);