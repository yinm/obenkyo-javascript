self.addEventListener('message', function(e) {
  let count = 0;
  for (let i = 1, length = e.data.target; i < length; i++) {
    if (i % e.data.x === 0) {
      count++;
    }
  }

  postMessage(count);
}, false);