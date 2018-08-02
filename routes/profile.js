const router = require('express').Router()
const Model = require('../models')


router.get('/', function(req, res) {
    let username = req.session.username
    // console.log(user);
    Model.Member.findOne({
        where: {
            username: username
        }
    })
    .then(user => {
        res.render('./template/profile', {user})
    })
    .catch(err => {
        res.send(err)
    })
})

router.post('/', function(req, res) {
    //name, age, gender, bio, username, password
    // console.log(req.body);
    let newMember = req.body
    Model.Member.create(newMember)
    .then(() => {
        res.redirect('/')
    })
    .catch(err => {
        res.json(err)
    })
})

router.get('/:id/edit', function(req, res) {
    let id = req.params.id
    Model.Member.findOne({
        where: {
            id: id
        }
    })
    .then(user => {
        res.render('./template/editMember', {user, err:null})
    })
    .catch(err => {
        res.send(err)
    })
})

router.post('/:id/update', function(req, res) {
    // console.log(req.body);
    let editMember = req.body
    Model.Member.update(editMember, {
        where: {
            id: req.params.id
        }
    })
    .then(() => {
        res.redirect('/profile')
    })
    .catch(err => {
        res.send(err)
    })
})

router.get('/:id/delete', function(req, res) {
    Model.Member.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(() => {
        res.redirect('/')
    })
    .catch(err => {
        res.send(err)
    })
})

module.exports = router