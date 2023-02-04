const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const plans = ['Buy food', 'Cook food', 'Eat food', 'Coding'];

app.set('view engine', 'ejs');

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(express.static('public'));

app.get('/', (req, res) => {
  const today = new Date();

  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  };

  const day = today.toLocaleString('en-US', options);

  res.render('list', { kindOfDay: day, newPlans: plans });
});

app.post('/', (req, res) => {
  //console.log(req.body);
  const p = req.body.plan;
  plans.push(p);
  res.redirect('/');
});

app.listen('3000', () => {
  console.log('Server is listen on port 3000');
});
