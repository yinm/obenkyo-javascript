document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('inner').addEventListener('click', function(e) {
    window.alert('#innerリスナーが発生しました');
    e.stopImmediatePropagation();
  }, false);

  document.getElementById('inner').addEventListener('click', function(e) {
    window.alert('#innerリスナー2が発生しました');
  }, false);

  document.getElementById('outer').addEventListener('click', function(e) {
    window.alert('#outerリスナーが発生しました');
  }, false);
}, false);
