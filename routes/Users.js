const router = require('express').Router();
const md5 = require('md5')
let User = require('../mongodb/models/user.model')

router.route('/').get((req, res)=>{
    User.find().then(Users => res.json(Users)).catch(err => res.status(400).json('Error: ' + err)) ;
})

router.route('/add').post((req, res) => {
    const {username, password, email} = req.body
    const newUser = new User({username, password, email})
    newUser.save().then(()=> res.json('User Added!'))
    .catch(err => res.status(400).json('Error: '+ err))
})

router.route('/delete/:id').delete((req, res)=> {
    User.findOneAndDelete().then(()=>{
        console.log("Deleted a Account,,,")
    }).catch(err => res.status(400).json('Error: '+ err))
    })

module.exports = router