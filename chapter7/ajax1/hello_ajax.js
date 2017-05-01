document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('btn').addEventListener('click', function() {
    var result = document.getElementById('result');
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) { // 通信完了

        if (xhr.status === 200) { // 通信が成功
          result.textContent = xhr.responseText;
        } else {  // 通信が失敗
          result.textContent = 'サーバエラーが発生しました。';
        }

      } else {  // 通信が完了する前
        result.textContent = '通信中...';
      }
    };

    // サーバとの非同期通信の開始
    xhr.open('GET', 'hello_ajax.php?name=' + encodeURIComponent(document.getElementById('name').value), true);
    xhr.send(null);
  }, false);
}, false);