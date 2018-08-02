const router = require('express').Router()
const Model = require('../models')


router.get('/', function(req, res) {
    let user = req.session.username
    res.render('./template/signup', {user})
})

router.post('/', function(req, res) {
    //name, age, gender, bio, username, password
    // console.log(req.body);
    let newMember = req.body
    newMember.role = 'admin'
    Model.Member.create(newMember)
    .then(() => {
        res.redirect('/')
    })
    .catch(err => {
        res.json(err)
    })
})

module.exports = router