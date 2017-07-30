const express = require('express');
const app = express();

app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.send("Hellu Wurld")
})

app.listen(3000, () => {
  console.log("App Running: Port 3000");
})
