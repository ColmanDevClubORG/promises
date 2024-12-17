function getData(callback) {
  setTimeout(() => {
    console.log('Step 1: Data fetched');
    callback(null, 'data1');
  }, 1000);
}

function processData(data, callback) {
  setTimeout(() => {
    console.log('Step 2: Data processed:', data);
    callback(null, 'processedData1');
  }, 1000);
}

function saveData(data, callback) {
  setTimeout(() => {
    console.log('Step 3: Data saved:', data);
    callback(null, 'savedData1');
  }, 1000);
}

// Nested callbacks - "Callback Hell"
getData((err, data1) => {
  if (err) return console.error(err);
  processData(data1, (err, processedData) => {
    if (err) return console.error(err);
    saveData(processedData, (err, savedData) => {
      if (err) return console.error(err);
      console.log('All steps completed successfully:', savedData);
    });
  });
});
