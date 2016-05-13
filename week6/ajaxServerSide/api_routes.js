// =====START GLOBAL VAR DECLARATION=====
var
  ctrls     = require('./server_controllers.js'),
  apiRouter = require('express').Router()

  apiRouter.route('/kanye/:album')
    .get(ctrls.kanye.getAlbum)

module.exports = apiRouter
