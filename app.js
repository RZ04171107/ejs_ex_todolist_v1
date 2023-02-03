const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get('/', (req, res) => {
  res.send('This is the home page');
});

app.listen('3000', () => {
  console.log('Server is listen on port 3000');
});
