// server/app.js
const express = require('express');
const morgan = require('morgan');
const path = require('path');
var MobileDetect = require('mobile-detect');
const app = express();
var mobile = path.resolve(__dirname, '..', 'build/mobile');
console.log("mobilepath",mobile);
// Setup logger
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));


app.use("/mobile", express.static("build/mobile"));
app.use("/desktop", express.static("build/desktop"));

app.get('*.js', function(req, res, next) {
  res.set('Content-Type', 'application/javascript');
  return next();
});
app.get('*.css', function(req, res, next) {
  res.set('Content-Type', 'text/css');
  return next();
});



app.get('*', (req, res) => {
   var md = new MobileDetect(req.headers['user-agent']);
   if(md.mobile()){
    res.sendFile(path.resolve(__dirname, '..', 'build/mobile', 'index.html'));
   }else{
    res.sendFile(path.resolve(__dirname, '..', 'build/desktop', 'index.html'));
   }

});

module.exports = app;
