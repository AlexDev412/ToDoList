const { Users } = require('../../../Model/user');
const { checkUserExist } = require('./register.errormanagement');

function register(app) {
    app.post('/register', async (req, res) => {
        let { username, password } = req.body;

        if (!username || !password) {
            res.status(400).send({ msg: 'Invalid username or password', status:400 });
            return;
        }
        const result = await checkUserExist(username);
        if (result) {
            res.status(400).send({ msg: 'Username already use.', status:400 });
            return;
        } else {
            const user = new Users({
                    username: username,
                    password: password
            });
    
            user.save()
              .then(() => {
                res.status(200).send({msg: "User registered successfully.", status : 200});
              })
              .catch(err => {
                res.status(400).send({ msg: err.message, status: 400});
              })
        }
    });
}

module.exports = { register }