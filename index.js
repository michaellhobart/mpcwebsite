const express = require('express');
const app = express();
const bootstrap = require('bootstrap');

app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(3000, () => {
  console.log("App Running: Port 3000");
})