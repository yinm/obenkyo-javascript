document.addEventListener('DOMContentLoaded', function() {
  var books = [
    {title: '独習PHP', price: 3200},
    {title: 'Java Pocket', price: 2680},
    {title: 'create app', price: 2000}
  ];

  var list = document.getElementById('list');
  var fragment = document.createDocumentFragment();

  for (var i = 0, length = books.length; i < length; i++) {
    var book = books[i];
    var li = document.createElement('li');
    var text = document.createTextNode(book.title + ' : ' + book.price + '円');
    li.appendChild(text);
    fragment.appendChild(li);
  }

  document.getElementById('list').appendChild(fragment);
}, false);