//Functional programming

// Pure functions vs side effects

var words = ['these', 'are', 'some', 'words']

// This function has side effects
// function capper (){
//     for(var i = 0; i < words.length; i++){
//         words[i] = words[i].toUpperCase()
//     }
// }
// capper()

// Functional (pure)
function capper (inputArray){
    var outputArray = []
    for(var i = 0; i < inputArray.length; i++){
        outputArray.push(inputArray[i].toUpperCase())
    }
    return outputArray
}
var bigWords = capper(words)

// Built in array methods
// forEach (non functional)

// ====== Map ====== \\
//  Returns a NEW array, calls the callback for EACH item in the original array
var kungFury = ['tiger', 'mantis', 'panda', 'crane']

// We will use map to uppercase the first letter in each stance

// stanceCap is our CALLBACK function for map
var stanceCap = function(el, index){
    return el[0].toUpperCase() + el.substring(1)
}
var hiyah = kungFury.map(stanceCap)


// ===== Filter ===== \\
// Return a NEW array, calls the callback for EACH item in the original array.  YOU decide what elements from the original array are kept in the NEW array

var cast = [
        {
            name : 'Po',
            actor : 'Jack Black',
            primary : true
        },
        {
            name : 'Po\'s Dad',
            actor : 'James Hong',
            primary : false
        },
        {
            name : 'Crane',
            actor : 'David Cross',
            primary : true
        }
    ]

var filteredCast = cast.filter(function(actor){
    // Filter expects a return of true or false to decide which elements to keep
    // console.log(actor)
    // Only keep primary actors
    return actor.primary
})


// ===== Reduce ===== \\
// Is called on an array, but returns a single value

var initialMonies = 500

var purchases = [12.63, 14, 300, 88.15]

var reduceCallback = function(runningTotal, purchase){
    console.log('current total : ', runningTotal)
    console.log('after : ', runningTotal - purchase)
    console.log('=========')
    return runningTotal - purchase
}
var finalMonies = purchases.reduce(reduceCallback, initialMonies)



