const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
const xoauth2 = require('xoauth2');

app.use(express.static('public'))

app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('index')
})

// ***** NODE MAILER *****

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        type: 'OAuth2',
        user: 'info@monumentprintco.com',
        clientId: '290393434159-uelmcp6rsa6l2eu0vfkbfi58dqq8g3rg.apps.googleusercontent.com',
        clientSecret: 'U0-k7ar6ICmHPNfPJya3Nnro',
        refreshToken: '1/uhmHFORgXlYIZu1gCk7YzLeNdAEVz3ZnymH_oOYI_m5_GjPWpm5lWcPrUCbnFeyT'
    }
});

var messageOptions = {
    from: 'Monument Print Co <info@monumentprintco.com>',
    to: 'mike@monumentprintco.com',
    subject: 'Nodemailer tust3',
    text: 'Chuck chuck',
    html: '<b>CHUCK CHUCK</b>'
}

//*****************

app.listen(3000, () => {
  console.log("App Running: Port 3000");
})
