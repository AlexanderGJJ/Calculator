const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send('I\'m calculator! Nice to meet you');
});
app.listen(3000, () => {
  console.log('Express web app on localhost:3000');
});
