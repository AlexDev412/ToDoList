const { checkUserExist, checkPassword, createUuid } = require('./login.errormanagement');

function login(app){
    app.post('/login', async (req, res) => {
        try {
            let { username, password } = req.body;
            let resultUser = await checkUserExist(username);
            let resultPassword = await checkPassword(username, password);

            if (!resultUser) {
                res.status(400).send({msg: "This account does not exist.", status:400});
            } else if (resultPassword) {
                createUuid(username);
                res.status(200).send({msg: "Users login successfully.", status: 200});
            } else {
                res.status(400).send({msg: "Wrong password", status: 400});
            }
        } catch (error) {
            res.status(400).send({msg: error.message, status :400});
        }
    })
}

module.exports = { login }