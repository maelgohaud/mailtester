const express = require('express');
const validator = require('bulk-email-verifier');
const app = express();

app.get('/', function (req, res) {
  var domain = 'gmail.com';
  var emails =  [
    'teaast3@gmail.com',
    'test1@gmail.com',
    'test2@gmail.com',
    'maelgohaud@gmail.com',
    'aurelien.merdassi@blacksales.co',
    'sebastien.burgain@blacksales.co'
];
 
  validator.verifyEmails(domain, emails, {}, function(err, data){
    console.log("Email Stats: ", err, data);	
});
});

app.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  console.log("Serveur lancé");
});
