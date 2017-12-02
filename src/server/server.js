const express = require('express');
const app = express();
const path = require('path');




app.get('/', function (req, res) {
    res.sendfile(path.resolve('src/client', './index.html'));
});

app.listen(3000, function () {
    console.log('app listening on port 3000');
});