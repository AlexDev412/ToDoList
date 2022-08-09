const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const userSchema = Schema({
    username: {
        type : String,
        required: true,
    },
    password:{
        type: String,
        required : true,
    },
    uuid: {
        type: String,
        default: '',
    }
});

const Users = mongoose.model('Users', userSchema);

module.exports = { Users };