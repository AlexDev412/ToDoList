const { Users } = require('../../../Model/user');

function register(app) {
    app.post('/register', (req, res) => {
        const { username, password } = req.body;
        const user = new Users({
                username: username,
                password: password
        });

        user.save()
          .then(() => {
            res.status(200).send({msg: "User registered successfully.", status : 200});
          })
          .catch(err => {
            console.error(err);
          })
    });
}

module.exports = { register }