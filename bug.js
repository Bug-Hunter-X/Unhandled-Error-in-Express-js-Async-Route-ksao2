const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Asynchronous operation that might throw an error
  doSomethingAsync().then(() => {
    res.send('Hello World!');
  }).catch(error => {
    // Error handling is missing here!
  });
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

async function doSomethingAsync() {
  // Simulate an asynchronous operation that might fail
  // For demonstration purposes, we're using a simple random number
  const randomNumber = Math.random();
  if (randomNumber < 0.5) {
    throw new Error('Something went wrong!');
  }
}