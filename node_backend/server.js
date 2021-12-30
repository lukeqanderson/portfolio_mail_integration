// to give the app access to all express functions
const express = require('express');
const app = express();

// to give access to nodemailer
const nodemailer = require("nodemailer");

// use port 8080 in development mode or environment variable port
const PORT = process.env.PORT || 8080;

// middleware
app.use(express.static('public'));
app.use(express.json());

// to send file for index.html 
app.get('/', (req,res) => {
    res.sendFile(__dirname + "/public/index.html");
})


// creates POST route for form data
app.post('/', (req,res) => {
    console.log(req.body);
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: "lukeqanderson@gmail.com",
            // pass: needs password in environmental variable for security
        }
    })

    const mailOptions = {
        from: req.body.email,
        to: 'lukeqanderson@gmail.com',
        subject: `Message from ${req.body.email}, from portfolio website.`,
        text: req.body.message
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if(error) {
            res.send('error');
        }
        else {
            res.send('success');
        }
    })
})

// to make server listen on port
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})