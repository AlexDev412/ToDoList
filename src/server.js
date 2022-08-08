const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
    res.send("hello world!");
    return;
})

app.listen(port, () => {
    console.log("server listening on port " + port);
})