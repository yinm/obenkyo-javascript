let storage = localStorage;

for (let i = 0, length = storage.length; i < length; i++) {
  let key = storage.key(i);
  let value = storage[key];
  console.log(key + ':' + value);
}