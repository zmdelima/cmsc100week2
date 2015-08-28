var express = require('express');
var app = express();

var server = app.listen(5000,function (){
  var host = server.address().address;
  var port  = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
  });
  
app.use(require('body-parser')());
  app.use(require('method-override')());
  app.use(require(__dirname +'/config/router')(express.Router()));
/*
  app.<method>(<path>,<callback>)
  
  app.get('\', function(req,res){
    res.send('Hello World');
  });
  
  -- can pass parameters,forms,oth data.

  app.route()
  app.route('/students')
    .get(function(req,res){
      res.send('Get the student!');})
    .post(function(req,res){
      res.send('Add the student!');})
    .put(function(req,res){
      res.send('Update the student!'); });
  
  
  express.Router class can be userd to create 
  modular mountable route handlers
  app.use(require('body-parser')()); //data
  app.use(require('method-override)()); //put and delete data
  app.use(require(_dirname+'/config/router')(express.Router()));//modules :3
  
  modules
  
  
*/