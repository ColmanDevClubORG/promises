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
async function init() {
  try {
    const data = await getData();
    const processedData = await processData(data);
    const savedData = await saveData(processedData);
    console.log('All steps completed successfully:', savedData);
  } catch (err) {
    console.error(err);
  }
}

init();
