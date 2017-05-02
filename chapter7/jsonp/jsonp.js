document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('btn').addEventListener('click', function() {
    var url = 'http://b.hatena.ne.jp/entry/jsonlite/?callback=show&url=' + encodeURIComponent(document.getElementById('url').value);
    var script = document.createElement('script');
    script.src = url;
    document.getElementsByTagName('body').item(0).appendChild(script);
  }, false);
},false);

function show(data) {
  if (data === null) {
    result.textContent = 'ブックマークは存在しませんでした。';
  } else {
    var bms = data.bookmarks;
    var ul = document.createElement('ul');
    for (var i = 0, length = bms.length; i < length; i++) {
      var li = document.createElement('li');
      var anchor = document.createElement('a');
      anchor.href = 'http://b.hatena.ne.jp/' + bms[i].user;
      var text = document.createTextNode(bms[i].user + ' ' + bms[i].comment);
      anchor.appendChild(text);
      li.appendChild(anchor);
      ul.appendChild(li);
    }
    result.appendChild(ul);
  }
}
