const router = require('express').Router()
const Model = require('../models')

router.get('/', function(req, res) {
    // res.send('masuk group')
    Model.Group.findAll()
    .then(data => {
        // res.send(data)
        let user = req.session.role
        res.render('./template/dataGroups', {data, user})
    })
})

module.exports = router