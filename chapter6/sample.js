document.addEventListener('DOMContentLoaded', function() {
  var list = document.getElementById('list');
  var picture = document.getElementById('picture');
  var del = document.getElementById('delete');

  list.addEventListener('click', function(e) {
    var isbn = e.target.getAttribute('data-isbn');

    if (isbn) {
      var img = document.createElement('img');
      img.src = 'http://www.wings.msn.to/books/' + isbn + '/' + isbn + '.jpg';
      img.alt = e.innerHTML;
      img.height = 150;
      img.width = 108;

      if (picture.getElementsByTagName('img').length > 0) {
        picture.replaceChild(img, picture.lastChild);
      } else {
        del.disabled = false;
        picture.appendChild(img);
      }
    }
  }, false);

  del.addEventListener('click', function() {
    picture.removeChild(picture.lastChild);
    del.disabled = true;
  }, false);
}, false);