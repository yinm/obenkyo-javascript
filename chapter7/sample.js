window.addEventListener('DOMContentLoaded', function() {
  let count = 0;
  let result = document.getElementById('result');

  document.getElementById('button').addEventListener('click', function() {
    result.textContent = ++count;
    history.pushState(count, null, '/count/' + count);
  }, false);

  window.addEventListener('popstate', function(e) {
    count = e.state;
    result.textContent = count;
  }, false);
}, false);
