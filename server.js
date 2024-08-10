const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.post('/submit', (req, res) => {
    const { fullName, education, courseName, trainingProgram, contactNumber } = req.body;

    const data = `Ad / Soyad: ${fullName}\nTəhsil: ${education}\nTəlim keçdiyi kursun adı: ${courseName}\nKeçdiyi təlim proqramı: ${trainingProgram}\nƏlaqə nömrəsi: ${contactNumber}\n\n`;

    fs.appendFile('form-data.txt', data, (err) => {
        if (err) throw err;
        console.log('Data saved!');
        res.send('Təşəkkür edirik! Sizinlə əlaqə saxlanılacaqdır.');
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
