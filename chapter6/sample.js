document.addEventListener('DOMContentLoaded', function() {
  var resultText = document.getElementById('result_text');
  var resultHtml = document.getElementById('result_html');

  console.log(resultText);
  console.log(resultHtml);

  // 取得時の状態を見るため、設定を遅延させる
  setTimeout(function() {
    resultText.textContent = '<a href="http://www.example.com">example.com</a>';
    resultHtml.innerHTML = '<a href="http://www.example.com">example.com</a>';
  }, 5000);
}, false);