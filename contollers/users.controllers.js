const userModel = require('../models/userDetails')

// async function createUser (req, res){

//     const { data } = req.body;

//     try {
//         if (data === "waitlist") {
//             res.send({ status: "ok"});
//         } else {
//             res.send({ status: "User Not Found" });
//         }
//     } catch (error) {
//         res.send({ status: "Something went wrong try again" });
//     }
// };

function getUsers(req, res){
    userModel.find()
    .then((users) => {
        res.status(200).send(users)
    }).catch((err) => {
        console.log(err)
        res.status(500).send(error.message)
    })
};


function registerUser(req, res){
    const body = req.body;
    userModel.create(body)
    .then((newUser) => {
        res.status(201).send(newUser)
    }).catch((err) => {
        console.log(err)
        res.status(500).send(err.message)
    })
};

module.exports = {
    getUsers,
    registerUser
}
