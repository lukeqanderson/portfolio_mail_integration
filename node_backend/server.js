// to give the app access to all express functions
const express = require('express');
const app = express();

// use port 5000 in development mode or environment variable port
const PORT = process.env.PORT || 5000;

// to access static files
app.use(express.static('public'));

app.get('/', (req,res) => {
    res.send('hello!!');
})

// to make server listen on port
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})