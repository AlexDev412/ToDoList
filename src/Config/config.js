const mongoose = require('mongoose');

const uri = "mongodb+srv://garsserieux:123Soleil@cluster0.kaihlv1.mongodb.net/?retryWrites=true&w=majority";

const client = mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
db = mongoose.connection;
db.on("error", console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('\x1b[32m%s\x1b[0m', 'Connecting with Mongoose.');
})

