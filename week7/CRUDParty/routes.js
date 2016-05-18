// routes.js (routes)
var router = require('express').Router()
var userCtrl = require('./controllers/users.js')

// User routes
router.route('/users')
    .post(userCtrl.create)    // C
    .get(userCtrl.find)       // R
    
router.route('/users/:id')
    .post(userCtrl.update)    // U
    .delete(userCtrl.delete)  // D

// We need to access our routes in server.js so we export them
module.exports = router