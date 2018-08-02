function isLogin(req, res, next) {
    if(req.session.username === 'admin') {
        next()
    } else {
        res.redirect('/signin')
    }
}

module.exports = isLogin