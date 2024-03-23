const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.json()); // For parsing application/json

app.post('/checkprime', (req, res) => {
    const number = req.body.number;
    let isPrime = true;

    if (number < 2) isPrime = false;

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            isPrime = false;
            break;
        }
    }

    res.json({ number: number, isPrime: isPrime });
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});