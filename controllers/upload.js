const multer = require('multer');
const upload = multer({dest: './uploads/'});

module.exports.renderView = function(req, res) {
  res.render('upload', {});
};

module.exports.uploadFile = upload.single('file');

module.exports.getFileSize = function(req, res) {
  return res.json({size: req.file.size});
};