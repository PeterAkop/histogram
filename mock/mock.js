const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/index');
const cors = require('cors');

const mock = express();
const port = 4000;

global.mockData = [{
    "title": 'Pets in Cambridge',
    "data": {
        "cat": 55,
        "dog": 14,
        "lizard": 37,
        "elephant": 3
    }
}, {
    "title": 'Pets in london',
    "data": {
        "cat": 300,
        "dog": 1000,
        "fox": 800,
        "elephant": 400
    }
}];

async function start() {
    mock.use(bodyParser.json());
    mock.use(cors());
    await routes(mock);
    mock.listen(port, () => console.log(`Mock listening on port ${port}!`));
}

start().catch((e) => console.log(e));

