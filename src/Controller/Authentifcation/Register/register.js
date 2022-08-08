const { Users } = require('../../../Model/user');

function register(app) {
    app.post('/register', (req, res) => {
        const { username, password } = req.body;

        if (!username || !password) {
            res.status(400).send({ msg: 'Invalid username or password', status:400 });
            return;
        }
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
    });
}

module.exports = { register }