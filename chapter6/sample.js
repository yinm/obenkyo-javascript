document.addEventListener('DOMContentLoaded', function() {
  var Counter = function(element) {
    this.count = 0;
    this.element = element;
    element.addEventListener('click', ()=> {
      this.count++;
      this.show();
    }, false);
  };

  Counter.prototype.show = function() {
    console.log(this.element.id + 'は' + this.count + '回クリックされました。');
  };

  var c = new Counter(document.getElementById('button'));
}, false);