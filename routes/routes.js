const router = require('express').Router()
const groupRouter = require('./groupRoutes')
const memberRouter = require('./memberRoutes')
const userRouter = require('./user')
const signupRouter = require('./signup')
const profileRouter = require('./profile')
const logoutRouter = require('./logout')
const chartRouter = require('./chartRouter')

const isLogin = require('../helpers/middleware/isLogin')
const isMember = require('../helpers/middleware/isMember')


router.use('/signin', userRouter)

router.use('/signup', signupRouter)

router.use('/members', memberRouter)

router.use('/groups', groupRouter)

router.use('/logout', logoutRouter)

router.use('/chart', chartRouter)

router.use('/profile', isMember, profileRouter)


router.get('/', function(req, res) {
    // res.send('routes')
    let user = req.session.username
    res.render('./template/home', {user})
})

module.exports = router