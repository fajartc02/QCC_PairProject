const router = require('express').Router()
const Model = require('../models')
const bcrypt = require('bcrypt')



router.get('/', function(req, res) {
    let user = req.session.username
    res.render('./template/signin', {user, err:null})
})

router.post('/', function(req, res) {
    // username, password
    Model.Member.findOne({
        where: {
            username: req.body.username
        }
    })
    .then(user => {
        let hash = user.password
        let plainPass = req.body.password
        bcrypt.compare(plainPass, hash, function(err, result) {
            if(result === true) {
                req.session.username = req.body.username
                req.session.role = user.role
                // console.log('success');
                res.redirect('/')
            } else {
                let user = req.session.username
                res.render('./template/signin', {user, err:'Username or password invalid'})
            }
        });
    })
    .catch(err => {
        // res.send(err)
        let user = req.session.username
        res.render('./template/signin', {user, err:'Username or password invalid'})
    })
})

module.exports = router