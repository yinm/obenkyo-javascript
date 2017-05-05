document.addEventListener('DOMContentLoaded', function() {
  var logo = document.getElementById('logo');
  var attrs = logo.attributes;

  var title = document.createAttribute('title');
  title.value = 'ロゴ画像';
  attrs.setNamedItem(title);

  attrs.removeNamedItem('alt');

  for (var i = 0, length = attrs.length; i < length; i++) {
    var attr = attrs.item(i);
    console.log(attr.name + ':' + attr.value);
  }
}, false);