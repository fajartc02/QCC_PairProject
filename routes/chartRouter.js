const router = require('express').Router()
const Model = require('../models')

router.get('/:id/show', function(req, res) {
    // res.send('masuk chart')
    Model.Theme.findOne({
        where: {
            GroupId: req.params.id
        }
    })
    .then(themeData => {
        // console.log(themeData);
        res.render('./template/showChart', { themeData: themeData })
    })
    .catch(err => {
        res.json(err)
    })
})

module.exports = router