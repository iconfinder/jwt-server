var express = require('express');
var app = express();
var request = require('request');

var CLIENT_ID = process.env.CLIENT_ID;
var CLIENT_SECRET = process.env.CLIENT_SECRET;
var AUTH_URL = "https://www.iconfinder.com/api/v3/oauth2/token";

app.use(express.static('../public'));

app.get('/', function (req, res) {
    request.post(AUTH_URL, {
        form: {
            grant_type:'jwt_bearer',
            client_id: CLIENT_ID,
            client_secret: CLIENT_SECRET
        }
    }, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body);
            delete body.token_type;
            res.send(body);
        } else {
            console.log(error, response, body);
        }
    });
});

app.listen(3334, function () {
    console.log('Example app listening on port 3334!');
});
