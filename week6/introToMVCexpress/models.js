// var plates = [
//   {
//     name: 'Taco Salad',
//     category: 'TexMEX',
//     price: 9.99
//   },
//   {
//     name: 'Smoothie',
//     category: 'LowCarb',
//     price: 15.11
//   }
// ]
// module.exports = plates

var
    mongoose = require('mongoose'),
    Schema   = mongoose.Schema,
    plateSchema = new Schema({
      name: String,
      category: {type: String, required: true},
      price: Number,
      keywords: Array
    })

    module.exports = {
        plates: mongoose.model('Plate', plateSchema)
    }
