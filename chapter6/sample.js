document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('button').addEventListener('click', function() {
    var name = document.getElementById('name');
    var url = document.getElementById('url');
    var list = document.getElementById('list');

    var anchor = document.createElement('a');
    anchor.href = url.value;

    var text = document.createTextNode(name.value);
    anchor.appendChild(text);

    var br = document.createElement('br');

    list.appendChild(anchor);
    list.appendChild(br);
  }, false);
}, false);