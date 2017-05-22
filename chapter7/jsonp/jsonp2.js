document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('btn').addEventListener('click', function() {
    let url    = 'http://b.hatena.ne.jp/entry/jsonlite/?callback=show&url='
               + encodeURIComponent(document.getElementById('url').value);
    let script = document.createElement('script');
    script.src = url;
    document.getElementsByTagName('body').item(0).appendChild(script);
  }, false);
}, false);

function show(data) {
  if (data === null) {
    result.textContent = 'ブックマークは存在しませんでした。';
  } else {
    let bms = data.bookmarks;
    let ul  = document.createElement('ul');
    for (let i = 0, length = bms.length; i < length; i++) {
      let li      = document.createElement('li');
      let anchor  = document.createElement('a');
      anchor.href = 'http://b.hatena.ne.jp/' + bms[i].user;
      let text    = document.createTextNode(bms[i].user + ' ' + bms[i].comment);

      anchor.appendChild(text);
      li.appendChild(anchor);
      ul.appendChild(li);
    }
    result.appendChild(ul);
  }
}