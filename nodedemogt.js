const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

app.get('/Plans/estimates', function(req, res) {
    res.json(data);
    
});


app.get('/Plans/qoute', function(req, res) {
    res.json(data1);
    
});

app.get('/Plans/somethingwrong', function(req, res) {
    res.json(data2);
    
});

app.get('/Plans/animals', function(req, res) {
    res.json(animals);
    
});


app.get('/Plans/auth', function(req, res) {
console.log('yello there');
var cred = {
    uName: "satendra",
    pass: "pass"
};
console.log('yello there');
var login = req.headers.authorization.replace(/^Basic/, '');
 login = (new Buffer(login, 'base64')).toString('utf8');
 
var info = login.split(':');
 
console.log(info[0]);
console.log(info[1]);


    if (info[0] === cred.uName && info[1] === cred.pass) {
        console.log('Great You are Authenticated...');
      res.end();
    }
else{

res.status(402).json({ message: 'Invalid Authentication Credentials' });

}
    
});

var data = {
  name: 'Mobile',
  id: '1',
  amount: '5000'
};

var data1 = [{
  name: 'laptop',
  id: '13',
  amount: '53000'
}];


var animals = [{
  name: 'dog',
  id: '13',
  amount: '200'
}];


var data2 = [{
  message:'Something wrong please try again'
}];


app.listen(3456, function() {
    console.log('Service is running');
});


