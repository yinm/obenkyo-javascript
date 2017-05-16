var Member = function(firstName, lastName) {
  this.firstName = firstName;
  this.lastName  = lastName;
};

Member.prototype = {
  getName: function() {
    return this.lastName + ' ' + this.firstName;
  },
  toString: function() {
    return this.lastName + this.firstName;
  }
};

var mem1 = new Member('太郎', '田中');
console.log(mem1.getName());
console.log(mem1.toString());
