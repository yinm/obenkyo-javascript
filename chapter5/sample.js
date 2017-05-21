let data_array = ['one', 'two', 'three'];
let itr = data_array[Symbol.iterator]();
let d;
while (d = itr.next()) {
  if (d.done) {break;}
  console.log(d.done);
  console.log(d.value);
}