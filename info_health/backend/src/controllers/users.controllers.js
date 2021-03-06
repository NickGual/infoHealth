const userCtrl = {};
const User = require('../models/User')

userCtrl.getUsers = async (req,res) => {
    const users = await User.find()
    res.json(users)
};

userCtrl.createUsers = async (req,res) => {

    const {username} = req.body
    const newUser = new User ({
        username: username
    });
    await newUser.save()
    res.json({message: "user created"})



};

userCtrl.deleteUsers = async (req,res) => {
    await User.findByIdAndDelete(req.params.id)
    res.json({message: "user deleted"})
};

module.exports = userCtrl;