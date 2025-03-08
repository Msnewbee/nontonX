const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/contact', (req, res) => {
    res.sendFile(__dirname + '/contact.html');
});

app.post('/send-email', (req, res) => {
    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'your-email@gmail.com', // Ganti dengan email Anda
            pass: 'your-email-password' // Ganti dengan password email Anda
        }
    });

    const mailOptions = {
        from: email,
        to: 'bilariko@gmail.com', // Ganti dengan email tujuan Anda
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

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
