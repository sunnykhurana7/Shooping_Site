const express = require('express');
const app = express();
const path = require('path');
require('./config/connection');

app.use('/public', express.static('dist'))

app.get('/', function (req, res) {
    res.sendFile('client/index.html', {root: path.resolve(__dirname, '../')});
});

app.listen(3000, function () {
    console.log('app listening on port 3000');
});