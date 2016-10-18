/*
* To change this license header, choose License Headers in Project Properties.
* To change this template file, choose Tools | Templates
* and open the template in the editor.
*/

var express = require('express');
var router = express.Router();
var path = require('path');
var filestream = require('fs');
var token;

router.get('/', function(req, res, next){
   res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

router.get('/products', function(req, res, next){
   res.sendFile(path.join(__dirname, '../public/views/', 'products.html'));
});


router.get('/values', function(req, res, next){
   res.sendFile(path.join(__dirname, '../public/views/', 'values.html'));
});


router.get('/get_content', function(req, res, next){
   var content,mastcontent;

    var filePath = path.join(__dirname, '../public/', 'content.json');
    var defaultPath = path.join(__dirname, '../public/', 'content.json');

    switch (token) {
      case true:
      mastcontent = JSON.parse(filestream.readFileSync(filePath, 'utf8'));
      res.json({'status': 200, 'data': mastcontent});
        break;
        case false:
        content = JSON.parse(filestream.readFileSync(defaultPath, 'utf8'));
        res.json({'status': 200, 'data': content});
          break;
      default:
      mastcontent = JSON.parse(filestream.readFileSync(filePath, 'utf8'));
      res.json({'status': 200, 'data': mastcontent});
    }


});





module.exports = router;
