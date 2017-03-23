const express = require('express');
const pug     = require('pug');
const marked  = require('marked');
const fs      = require('fs');

const uploadController = require('./controllers/upload');

const app    = express();
const router = express.Router();
const readme = fs.readFileSync('./README.md').toString();
const index  = marked(readme);
const port   = process.env.PORT || 3750;

app.set('view engine', 'pug');

router.route('/upload')
  .get(uploadController.renderView)
  .post(uploadController.uploadFile, uploadController.getFileSize);

app.use('/', router);
app.use('/', (_, res) => res.send(index));

app.listen(port);
console.log('listening on ' + port);

module.exports = app;