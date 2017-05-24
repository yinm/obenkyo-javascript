document.addEventListener('DOMContentLoaded', function() {
  console.log(location.href);

  document.getElementById('isbn').addEventListener('change', function() {
    location.replace('http://www.wings.msn.to/index.php/-/A-03/' + this.value);
  }, false);
}, false);