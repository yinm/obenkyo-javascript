document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('inner').addEventListener('click', function() {
    window.alert('#innerリスナーが発生しました');
  }, false);

  document.getElementById('inner').addEventListener('click', function() {
    window.alert('#innerリスナー2が発生しました');
  }, false);

  document.getElementById('outer').addEventListener('click', function() {
    window.alert('#outerリスナーが発生しました');
  }, false);
}, false);