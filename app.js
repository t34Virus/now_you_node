/*var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var methodOverride = require('method-override');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/stuff_test');
var Schema = mongoose.Schema;

var stuff = new Schema({
  title: String,
  description: String,
  is_done: Boolean,
  created_at: Date
});

var stuff = mongoose.model('stuff', stuff);

// serves static assets
app.use(express.static(__dirname + '/public'));
app.use(methodOverride('_method'));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());
// app.use(express.static(__dirname + '/app'));

// app.use('/', require('.routes/api.js'));
app.set('view engine', 'html');


app.get('/', function (req, res) {
  stuff.find(function(err, stuffsFromDB){
    if (err) throw err;
    res.render('index', {stuffs: stuffsFromDB });
  });
});
app.get('/stuffs/:id', function (req, res) {
  stuff.findOne({_id:req.params.id},
    function(err, stuff){
    if (err) throw err;
    res.render('edit_stuff', {stuff: stuff });
  });
});
//delete stuff
app.delete('/stuffs/:id', function (req, res) {
  stuff.remove({_id:req.params.id},
    function(err, stuff) {
  res.redirect('/');
  });
});
app.get('/new_stuff', function (req, res) {
  res.render('new_stuff');
});
//new stuff
app.post('/stuffs', function (req, res) {
  var stuff = new stuff(
  {
    title : req.body.title,
    description : req.body.description,
    is_done : false,
    created_at : new Date()
  });
  stuff.save(function(err){
    if (err) throw err;
    res.redirect("/");
  });
});

app.put('/stuffs/:id/complete', function (req, res) {
  stuff.update({_id:req.params.id},
    { $set: {is_done : true }}, function (err, stuff){
    res.send('success');
  });
});

app.put('/stuffs/:id/incomplete', function (req, res) {
  stuff.update({_id:req.params.id},
    { $set: {is_done : false }}, function (err, stuff){
      res.send('success');
  });
});

//edit stuff
app.put('/stuffs/:id', function (req, res) {
  stuff.update({_id:req.params.id},
    { title: req.body.title,
      description: req.body.description
    }, function (err, stuff){
    res.redirect('/');
  });
});

app.get('/stuffs', function(req,res){
  stuff.find(function(err, stuffs){
    res.render('list', {stuffs: stuffs});
  });
});



var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
  // yay!
});

var server = app.listen(3002, function () {
2
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});*/

var express  = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser'); // will need this for cookies run this command to install it npm install --save cookie-parser

// var child_process = require('child_process');
// var port = parseInt(process.env.PORT, 10) || 3002;


var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/node_modules'));
app.use(express.static(__dirname + '/public/css'));
app.use(express.static(__dirname + '/public/js'));
app.use(express.static(__dirname + '/public/assets'));
app.use(express.static(__dirname + '/app'));
app.use(express.static(__dirname + '/public/bower_components'));
app.use(cookieParser());
app.use('/views', express.static('views'));
app.use('/node_modules', express.static('node_modules'));
app.use('/', require('./routes/api'));

app.listen(3003);

/*app.get('/exitChrome', function(req, res) {
  closeChrome();
    res.status( 200 );
    res.send( "" );
    return; 
}); 

function openChrome (port) {
  child_process.exec('start GoogleChromePortable/GoogleChromePortable.exe --disable-pinch --kiosk --overscroll-history-navigation=0 http://localhost:' + port);
}

function closeChrome(){
  child_process.exec('start TASKKILL /F /IM "chrome.exe"');
  child_process.exec('start TASKKILL /F /IM "node.exe"');
}

console.log("Simple static server listening at http://localhost:" + port);
var server = app.listen(port, function () {
  openChrome(port);
});
server.on('error', function (e) {
  console.log('PORT NUMBER ALREADY IN USE.  PLEASE CHECK OPEN SERVERS AND TRY AGAIN')
});
server.timeout = 5000;*/
