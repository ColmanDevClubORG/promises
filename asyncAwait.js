function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Step 1: Data fetched');
      resolve('data1');
    }, 1000);
  });
}

function processData(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Step 2: Data processed:', data);
      resolve('processedData1');
    }, 1000);
  });
}

function saveData(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Step 3: Data saved:', data);
      resolve('savedData1');
    }, 1000);
  });
}

// Promise chaining
getData()
  .then((data) => processData(data))
  .then((processedData) => saveData(processedData))
  .then((savedData) =>
    console.log('All steps completed successfully:', savedData)
  )
  .catch((err) => console.error(err));
