function isMember(req, res, next) {
    if(req.session.username) {
        next()
    } else {
        res.redirect('/signin')
    }
}

module.exports = isMember