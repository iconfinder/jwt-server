var express = require('express');
var request = require('request');
var cors = require('cors');
var app = express();

app.use(cors());

var PORT = process.env.PORT;
var CLIENT_ID = process.env.CLIENT_ID;
var CLIENT_SECRET = process.env.CLIENT_SECRET;
var AUTH_URL = "https://www.iconfinder.com/api/v3/oauth2/token";

// Set the route
app.get('/', function(req, res) {
    request.post(AUTH_URL, {
        form: {
            grant_type:'jwt_bearer',
            client_id: CLIENT_ID,
            client_secret: CLIENT_SECRET
        }
    }, function(error, response, body) {
        if (!error && response.statusCode == 200) {
            delete body.token_type;
            res.send(body);
        } else {
            console.log(error, response, body);
        }
    });
});

// Bind the app to the PORT
app.listen(PORT, function() {
    console.log('Example app listening on port', PORT);
});
