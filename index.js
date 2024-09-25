var express = require('express');
var cors = require('cors');
require('dotenv').config();
const multer=require('multer');


var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

const upload=multer({
  dest: 'uploads/'
});

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

app.post('/api/fileanalyse', upload.single('upfile'), function(req, res){
  
if(!req.file) return;

  const messageRespose={
    name: req.file.originalname,
    type: req.file.mimetype,
    size: req.file.size
  }

  res.json(messageRespose);
});






const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
