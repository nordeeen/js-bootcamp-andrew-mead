// ASYNC AWAIT
const getDataPromaise = num =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      typeof num === 'number'
        ? resolve(num * 2)
        : reject('Number must be provided');
    }, 2000);
  });

const processData = async () => {
  let data = await getDataPromaise(2);
  data = await getDataPromaise(data); // for get data 8
  data = await getDataPromaise(data); // for get data 8
  return data;
};

processData()
  .then(data => {
    console.log('Data :', data);
  })
  .catch(error => {
    console.log('Error :', error);
  });
