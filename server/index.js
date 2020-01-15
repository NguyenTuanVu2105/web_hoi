var express = require('express');
var app = express();
app.use(express.json());
const cors = require('cors');
app.use(cors());

require('./router/router')(app);

const db = require('./config/db.config');

db.sequelize.sync({force: true}).then(() => {
    console.log("Sequelize is Running");
}).catch(err => {
    console.log(err.message);
});

var port = process.env.PORT || 5000;

app.listen(port);