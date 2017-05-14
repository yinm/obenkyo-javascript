var Member = function(firstName, lastName) {
  if (!(this instanceof Member)) {
    return new Member(firstName, lastName);
  }
  this.firstName = firstName;
  this.lastName  = lastName;
};

var m = Member('二郎', '鈴木');
console.log(m);
// console.log(firstName); // Reference Errorになるため、コメントアウト
console.log(m.firstName);