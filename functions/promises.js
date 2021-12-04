/*
 Promise adalah Object yang merepresentasikan keberhasilan / kegagalan sebuah 
 event yang asynchronous di masa yang akan datang.

 1. resolve = janjinya terpenuhi.
 2. rejected = janjinya tidak terpenuhi.
 3. finally = waktu tunggunya telah selesai.

janji (terpenuhi / ingkar)
states (fulfilled / rejected / pending)
callback (resolve / rejected / finally)
aksi (then /catch)


*/

// callback
const getDataCallback = (num, callback) => {
  setTimeout(() => {
    if (typeof num === 'number') {
      callback(undefined, num * 4);
    } else {
      callback('Number must be provided');
    }
  }, 3000);
};

// Callback Hell
getDataCallback(2, (error, data) => {
  if (error) {
    console.log(`Error : ${error}`);
  } else {
    getDataCallback(data, (error, data) => {
      if (error) {
        console.log(`Error : ${error}`);
      } else {
        console.log(`Result number : ${data}`);
      }
    });
  }
});

// Promise
const getDataPromise = num =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      typeof num === 'number'
        ? resolve(num * 2)
        : reject('Number must be provided');
    }, 3000);
  });

// Promise Nested
getDataPromise(2).then(
  data => {
    getDataPromise(data).then(
      data => {
        console.log(`Promise data: ${data}`);
      },
      err => {
        console.log(`Error : ${err}`);
      }
    );
  },
  err => {
    console.log(`Error : ${err}`);
  }
);

// Promise Chaining
getDataPromise(10)
  .then(data => {
    return getDataPromise(data);
  })
  .then(data => {
    return 'this is some test data';
  })
  .then(data => {
    console.log(`Promise Chaining data : ${data}`);
  })
  .catch(error => {
    console.log(`Error : ${error}`);
  });

// UJICOBA
let data = true;
const myData = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (data) {
      resolve('ini dian');
    } else {
      reject('ini bukan dian');
    }
  }, 5000);
});

myData
  .finally(() => console.log('selesai menunggu...'))
  .then(response => console.log('OK ' + response))
  .catch(response => console.log('NOT OK ' + response));
