const express = require('express');
const next = require('next');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const port = process.env.PORT || 3000;

app.prepare().then(() => {
  const server = express();

  server.use(bodyParser.json());
  server.use(express.urlencoded({ extended: true }));

  server.post('/send-email', (req, res) => {
    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // Gunakan variabel lingkungan untuk keamanan
        pass: process.env.EMAIL_PASS  // Gunakan variabel lingkungan untuk keamanan
      }
    });

    const mailOptions = {
      from: email,
      to: 'bilariko@gmail.com',
      subject: `Contact Form Submission from ${name}`,
      text: message
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        res.status(500).send('Failed to send message.');
      } else {
        console.log('Email sent: ' + info.response);
        res.status(200).send('Message sent successfully!');
      }
    });
  });

  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`Server is running at http://localhost:${port}`);
  });
});
