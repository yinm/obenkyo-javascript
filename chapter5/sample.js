// ショートカット演算子を使って、
// 名前空間(e.g. Wings)が未定義の場合だけ、新しい名前空間を作成する
var Wings = Wings || {};

Wings.Member = function(firstName, lastName) {
  this.firstName = firstName;
  this.lastName  = lastName;
};

Wings.Member.prototype = {
  getName: function() {
    return this.lastName + ' ' + this.firstName;
  }
};

var mem = new Wings.Member('太郎', '田中');
console.log(mem.getName());