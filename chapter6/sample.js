window.addEventListener('DOMContentLoaded', function() {
  var list = document.querySelectorAll('#list .hoge');

  for (var i = 0, length = list.length; i < length; i++) {
    console.log(list.item(i).href);
  }
});
