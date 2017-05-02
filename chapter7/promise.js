function asyncProcess(value) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (value) {
        resolve(`入力値: ${value}`);
      } else {
        reject('入力は空です');
      }
    }, 500);
  });
}

asyncProcess('yinm').then(
  response => {
    console.log(response);
  },
  error => {
      console.log(`エラー:${error}`);
  }
);
