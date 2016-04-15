// Callback functions

// What is a callback function?
//      Function passed into ANOTHER function as an argument
//      Typically used to perform an operation AFTER something happens

// function buttonClicker(days){
    
//     return function(){
//         days.reduce(function(memo, el){
            
//         }, 30)
//     }
// }
// button.addEventListener('click', buttonClicker(days))


// 1. Write a function called Namer that accepts the following arguments : 
//    First Name
//    Last Name
//    Callback Function

// 2. Write the callback function to be passed into Namer
//    It should accept the following argument : 
//     Full Name of the person (first AND last in a single string)
//
//    The callback function should console.log the full name

// 3. Call Namer with arguments and pass in the callback



var fullName = Namer(['Tal', 'Franklin' ,'Box'], nameJoiner)


// Sweet callback
function Namer (collection, callback){
    return callback(collection)
}
function nameJoiner (arg){
    return arg.join(' ')
}




var myInterval = setInterval(function(){
    console.log('woohoo')
    
    setTimeout(function(){
        console.log('Hello!')
        clearInterval(myInterval)
    }, 5000)
    
}, gimmeFive())



function gimmeFive (){
    return 5
}

// someModule.method(function(err, data){
    
// })
