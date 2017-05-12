document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('inner').addEventListener('click', function(e) {
    window.alert('#innerリスナーが発生しました');
  }, true);

  document.getElementById('inner').addEventListener('click', function(e) {
    window.alert('#innerリスナー2が発生しました');
  }, true);

  document.getElementById('outer').addEventListener('click', function(e) {
    window.alert('#outerリスナーが発生しました');
    // 子要素へのイベント伝播をキャンセル
    e.stopPropagation();
  }, true);
}, false);