var ctrls = require('./controllers'),
    apiRouter = require('express').Router()

// app.get('/plates', func(){})
    apiRouter.route('/plates')
      .get(ctrls.platesController.all)

module.exports = apiRouter
