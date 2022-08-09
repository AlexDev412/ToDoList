const express = require('express');
const app = express();
const port = 8080;
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(
    cors({
        origin: '*',
        credentials: true
    })
)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

/////Mongoose///////////
const { connectToDB } = require('./Config/config');
////////////////////////////////

/////Authentication///////////
const { register } = require('./Controller/Authentifcation/Register/register');
const { login } = require('./Controller/Authentifcation/Login/login');
////////////////////////////////

connectToDB();

/////Authentication///////////
register(app);
login(app);
////////////////////////////////
app.listen(port, () => {
    console.log("server listening on port " + port);
})