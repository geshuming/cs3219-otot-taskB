let express = require('express');
let bodyParser = require('body-parser');
let apiRoutes = require('./routes/route');

let app = express();

let port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({
  extended: true
}));

// Send message for default URL
app.get('/', (req, res) => res.send('Hello World with Express'));

app.use('/api', apiRoutes)

// Launch app to listen to specified port
app.listen(port, function () {
     console.log("Running cs3219taskb on port " + port);
});