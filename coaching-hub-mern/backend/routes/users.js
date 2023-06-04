const router = require("express").Router()
let User = require("../models/user.model")

router.route("/").get((req, res) => {
    User.find()
     .then(users => res.json(users))
     .catch(err => res.status(400).json("Error: " + err))
})

// router.route("/api").get((req, res) => {
//     res.json({ message: "Hello from server!" });
// })

router.route("/test").post((req, res) => {
    console.log(req.body)
})

router.route("/sign-up").post((req, res) => {
    const new_email = req.body.email
    const new_password = req.body.password
    console.log(new_email, new_password)
    
    const newUser = new User({email: new_email, password: new_password, notes: []})

    newUser.save()
     .then(() => res.json("User added"))
     .catch(err => res.status(400).json("Error: " + err))
})

router.route("/login").post((req, res) => {
    const login_email = req.body.login_email
    const login_password = req.body.login_password

    User.find({"email": login_email, "password": login_password})
    .then(users => res.json(users))
    .catch(err => res.status(400).json("Error: " + err))
})

module.exports = router;