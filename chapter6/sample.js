window.addEventListener('DOMContentLoaded', function() {
  var current = new Date();
  var nameTime = document.getElementsByName('time');
  nameTime[0].value = current.toLocaleString();
});