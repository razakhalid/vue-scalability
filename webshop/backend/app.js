const express = require('express');
const path = require('path');
const cors = require('cors');
const db = require('./services/db');

const app = express();
const port = 3000;

app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'frontend', 'public')));

app.get('/', (req, res) => {
    res.send('Hello World!')
})

async function start(){
    await db.connect();
    app.listen(port, () => {
        console.log(`Listening on port: ${port}`);
    })
}

start();