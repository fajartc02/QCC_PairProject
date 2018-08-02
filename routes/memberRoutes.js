const router = require('express').Router()
const Model = require('../models')
const bcrypt = require('bcrypt')
const isLogin = require('../helpers/middleware/isLogin')

router.get('/',isLogin, function(req, res) {
    let user = req.session.role
    Model.Member.findAll()
    .then(dataMembers => {
        res.render('./template/dataMembers', {dataMembers, user})
    })
    .catch(err => {
        res.send(err)
    })
})

router.get('/register', function(req, res) {
    res.render('./template/registerMember', {err:null})
})

router.post('/register', function(req, res) {
    let newMember = req.body
    newMember.role = 'member'
    // console.log(newMember);
    
    Model.Member.create(newMember)
    .then(() => {
        res.redirect('/')
    })
    .catch(err => {
        res.render('./template/registerMember', {err})
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