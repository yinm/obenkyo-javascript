document.addEventListener('DOMContentLoaded', function() {
  var data = {
    title: 'Java Pocket',
    price: 2680,
    handleEvent: function() {
      console.log(this.title + '/' + this.price + '円');
    }
  };

  document.getElementById('button').addEventListener('click', data, false);
}, false);