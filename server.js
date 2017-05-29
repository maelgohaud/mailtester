var path = require('path');
var express = require('express');
var verifier = require('email-verify');
var app = express();

var publicPath = path.resolve(__dirname, "client");
app.use(express.static(publicPath));

app.get('/', function (req, res) {
  res.render("index.html");
});

app.post('/verify', function (req, res) {

verifier.verify( 'aurelien.merdassi@blacksales.co', function( err, info ){
  if( err ) console.log(err);
  else{
    console.log( "Success (T/F): " + info.success );
    console.log( "Info: " + info.info );
  }
});
});

app.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  console.log("Serveur lancé");
});
