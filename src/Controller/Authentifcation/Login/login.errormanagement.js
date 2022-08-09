const { Users } = require('../../../Model/user');
const crypto = require('crypto');

async function checkUserExist(username) {
    let res = await Users.findOne({ username: username});
    
    return res !== null ? true : false;
}

async function checkPassword(username, password) {
    let res = await Users.findOne({ username: username, password: password });
    
    return res !== null ? true : false;
}

async function createUuid(username) {
    await Users.findOneAndUpdate({username: username}, {uuid: crypto.randomUUID()});
    return;
}

module.exports = { checkUserExist, checkPassword, createUuid };