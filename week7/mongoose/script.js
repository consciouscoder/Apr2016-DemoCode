// script.js

// Requiring mongoose
var mongoose = require("mongoose");

// Connect to a specific database
mongoose.connect('mongodb://localhost/BaskinRobbins')
// use BaskinRobbins

// We need to describe what DOCUMENTS look like in our COLLECTIONS
// IceCream collection / schema
// How we describe what our data should look like
var iceSchrema = mongoose.Schema({
    flavor        : {type : String},
    color         : {type : String},
    toppings      : {type : Array, default : []},
    name          : {type : String},
    ingredients   : {type : Array, default : []},
    price         : {type : Number},
})

// Next, we need to describe to mongoose what COLLECTION should enforce this schema
var IceCream = mongoose.model('IceCream', iceSchrema)
// As part of its default behavior, mongoose will take the first argument to mongoose.model (the collection name to mongoose)
// And lowercase/pluralize it to name the collection in mongoDB
//IceCream => icecreams

// IceCream (the variable) is now our entry point into the collection - analogous to db.icecreams

// We need to add a document to the database
var myIceCream = {
    flavor        : 'BubbleGum',
    color         : 'Pink/Blue',
    toppings      : ['chocolate' , 'pop rocks', 'nuts', 'sprinkles'],
    name          : 'Bubbalicious',
    ingredients   : ['ice cream', 'Mr. Bubbles', 'Xantham Gum'],
    price         : 5.46,
}


// ---- Creating Documents ---- \\
    // Running our data through the IceCream constructor to turn it into an IceCream Object
    // var newIce = new IceCream(myIceCream)
    // // IceCream Objects have a save method attached to them that will save it to the DB
    // newIce.save( function(err, doc){
    //     console.log('Err : ', err)
    //     console.log('Doc : ', doc)
    // } )
// ---- END Creating Documents ---- \\

// ---- Finding Documents ---- \\

//db.icecreams.find
IceCream.find({price : {$lt : 6}}, function(err, icecreams){
    console.log('err', err)
    console.log('from the db : ', icecreams)
    // icecreams.forEach(function(cream){
    //     console.log(cream.price)
    // })
})

// ---- ENDFinding Documents ---- \\

// Common mongoose methods you will use!

// On the Collection (IceCream)
//     .find()
//     .findOne()
//     .update()
//     .remove()
//     new COLLECTION(data)

// On Documents
//     .save()
//     .markModified()
    
// More Advanced Methods
//     .populate()
//     .sort()


