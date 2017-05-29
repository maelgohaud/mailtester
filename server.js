const express = require('express');
const verifier = require('email-verify');
const app = express();

app.get('/', function (req, res) {

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
