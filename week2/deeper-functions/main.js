// Deeper into functions!

// var sum = function(num1, num2){
//     // var num1
//     // var num2
    
//     // if(typeof num1 !== 'number'){
//     //     num1 = 0
//     // }
//     // if(typeof num2 !== 'number'){
//     //     num2 = 0
//     // }
    
//     // Use a ternary because we cannot assign an if/else statement to a variable
//     // var num1 = if(typeof num1 !== 'number'){
//     // }
    
//     // typeof operator
//     num1 = typeof num1 !== 'number' ? 0 : num1
//     num2 = typeof num2 !== 'number' ? 0 : num2
    
//     // CONDITION ? TRUEVALUE : FALSEVALUE
    
//      return num1 + num2
// }
// console.log( sum(3, {name : 'Bill'}) )


// f(x) = x + 3
// f(9) => 12


// Nested Ternary
// var name = 'Ben'

// name === 'george' ? 
//     console.log('hello george')
//     : name === 'alice' ?
//         console.log('hello alice')
//             : console.log('who are you?')



// Arguments
// Functions
// Fewer args than parameters => params are undefined
// More args than parameter => how do we access?
//      All functions have a variable defined called arguments
// var myFunc = function(){
    
//     // console.log(arguments.length, 'hello', 'dog', 1, [0,1,2], {name : 'bill'})
//     var person = []
//     for(var i = 0; i < arguments.length; i++){
//         console.log(arguments[i])
//         person.push(arguments[i])
//     }
    
//     return person
//     // return {
//     //     name : name,
//     //     age : age
//     // }
// }

// console.log( myFunc('George', 42) )

// // angular.module('NAME', []) => create a module
// // angular.module('NAME')     => retrieve a module



// // Function scoping
// // All functions have their own scope
// var myName;
// var myFunc = function(){
//     var myName = "Bill"
//     var outsideStuff = null
//     console.log('Inside : ', myName)
    
//     var insideFunc = function(){
//         var somethingElse = 'hello'
//         console.log(outsideStuff)
//     }
    
// }
// myFunc()
// console.log(myName)
// myName is not defined, because it was defined as a local variable inside of a function
// Variables created INSIDE of a function are NOT accessible outside of itself

// Scoping works like one-way glass.  Functions can look UP to their parents/ancestors
// to gain access to variables




// Garbage Collection
//  Javascript has automatic garbage collection
//     Removes variables that are no longer being referenced

// After resetting the value for person, the {name : 'Bill'} object gets garbage collected
// There are no more references to that object
// var person = {name : 'Bill'}
// person = 5


// // After resetting the value for movie, the movie.info object is preserved
// // Rest of movie object is garbage collected
// var movie = {
//     title : 'Sharknado II',
//     info : {
//         set : 'Beach',
//         weather : 'Hurricane'
//     }
// }

// var movieInfo = movie.info
// movie = null


// Closure
// Taking advantage of variable references & garbage collection to hide variables


// Creating players than can take damage
var playerConstructor = function(){
    
    var health = 100
    
    return function(damage){
        health -= damage
        if(health <= 0){
            console.log('bleehhhhhh...')
        }
        else{
            console.log('Only ' + health + ' health left!')
        }
        
    }
    
}

var george = playerConstructor()
var steve = playerConstructor()
// It can be said that george and steve have CLOSURE over their respective HEALTH variables
// There's no way to access HEALTH outside of playerConstructor