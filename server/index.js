var express = require('express')
var app = express();
var path = require('path')
app.use(express.json());
const cors = require('cors');
app.use(cors())

app.use(express.static(path.join(__dirname, '/../client/build')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/../client/build/index.html'));
});

require('dotenv').config()

require('./router/router')(app);

const db = require('./config/db.config');

db.sequelize.sync().then(() => {
    console.log("Sequelize is Running");
}).catch(err => {
    console.log(err.message);
});

var port = process.env.PORT;

app.listen(port);