const { Users } = require('../../../Model/user');

async function checkUserExist(username) {
    const res = await Users.findOne({username: username});

    return res ===  null ? false : res.username === username ? true : true;
}

module.exports = { checkUserExist }