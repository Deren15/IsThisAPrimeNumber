const express = require('express');
const app = express();
const path = require("path");
const bodyParser = require("body-parser")
const port = 3000;

app.use(express.json()); // For parsing application/json
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/checkprime', (req, res) => {
    try {
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
    } catch(err) {
        console.log(err.message)
        res.json({ err: err.message })
    }
});

// app.use(express.static('public'));
// app.get("*", (req, res) => {
//         res.sendFile(path.join(__dirname, "public", "index.html"));
// });

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
