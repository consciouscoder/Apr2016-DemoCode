var plates = require('./models')

module.exports = {
    // plates controller
    platesController: {
      all: function(req, res){
        console.log("from my controller:",plates)
        res.json(plates)
      }//end of my all method
    }//end of my plates controller
}
