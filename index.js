const http = require('http');
const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
const xoauth2 = require('xoauth2');
const sgMail = require('@sendgrid/mail');
require('dotenv/config')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)
const bodyParser = require('body-parser');

app.use(express.static('public'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'pug');

// **** INDEX PAGE ****
app.get('/', (req, res) => {
  res.render('index')
})

// ***** SENDGRID *****

app.post('/send', (req, res) => {
  console.log(req.body);
  const msg = {
    to: 'info@monumentprintco.com',
    from: 'info@monumentprintco.com',
    subject: `NEW CONTAPT FROM ${req.body.name}`,
    text: `New contact from ${req.body.name}, email: ${req.body.email}, phone: ${req.body.telephone}, message: ${req.body.message}`,
    html: `<h1>New contact from ${req.body.name}</h1><br>email: ${req.body.email}<br>phone: ${req.body.telephone} <br> message: ${req.body.message}`,
  };
  sgMail.send(msg);
  const msgClient = {
    to: req.body.email,
    from: 'info@monumentprintco.com',
    subject: `Thanks for contacting Monument Print Company!`,
    text: `Hey ${req.body.name}! Thanks for reaching out. Someone will be getting back to you shortly!`,
    html: `<h1>Hey ${req.body.name}</h1><br>Thanks for reaching out! Someone will be getting back to you shortly!`,
  };
  sgMail.send(msgClient);
})

//*****************

console.log(process.env.SECRET_MESSAGE);

app.listen(3000, () => {
  console.log("App Running: Port 3000");
})
