const express = require('express');
const pug = require('pug');
const marked = require('marked');
const fs = require('fs');

const app = express();
const readme = fs.readFileSync('./README.md').toString();
const index = marked(readme);
const port = process.env.PORT || 3750;

app.set('view engine', 'pug')

app.use('/upload', function(req, res) {
  res.render('index', {});
});
app.use('/', (_, res) => res.send(index));

app.listen(port);
console.log('listening on ' + port);

module.exports = app;