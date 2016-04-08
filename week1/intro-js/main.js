// // console.log('hello javascript!')

// // number literal
// 4
// 10
// 3.1415926535
// -10

// 1 + 2
// 3 - 1
// 2 * 5
// 10 / 3
// // console.log(10 % 3) // modulus operator


// var result = 10 / 3

// // console.log(result)

// var greeting = 'Hello' + ' world.'
// // console.log(greeting)
// var eleven = '1' + '1'
// // console.log(eleven)
// var math = '1 + 1'
// // console.log(math)

// // accessing a property with dot-notation
// // console.log(greeting.length)

// // accessing a property with bracket-notation
// // console.log(greeting['length'])

// var property = 'length'
// // console.log(greeting[property])

// // console.log(greeting[greeting.length - 1])

// // console.log(!!!!!!!!!!!!!!!!!true)

// // one 'false' value makes the whole expression false
// // console.log(true && true && true && true && true && false)

// // console.log(false || false || false || false || false || true)

// // console.log(4 === 4)
// // console.log(4 <= 8)


// // if ( false ) {
// //     console.log("it's true!")
// // }
// // else if ( 1 !== 1 ) {
// //     console.log("1 is 1")
// // }
// // else {
// //     console.log('none of the above')
// // }

// // var country = 'canada'
// var country = 'texas'

// var age = 19
// var canDrink = false

// if ( age >= 21 ) {
//     canDrink = true
// }
// else if ( age >= 18 && country === 'canada' ) {
//     canDrink = true
// }
// else {
//     canDrink = false
// }

// // console.log('Will you be served? ' + canDrink)

// // if this 'if' is true, we don't even evaluate the else-if
// // if ( 1===1 ) { console.log('yes')}
// // else if ( 1===1 ) { console.log('yes')}


// // console.log(null)
// // console.log(undefined)
// var foo = undefined
// // console.log(foo) // if you don't give a variable a value, it has the value undefined.


// if ( NaN ) {
//     console.log('truthey!')
// }
// else {
//     console.log('falsey!')
// }


// Arrays
//             0           1          2           3            4    
// console.log(days)
var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
// order
// type / whats in it
// how many

// In order to see a value at a certain index, we use bracket notation
// console.log(days[3])
// To see the length of the array, we use dot notation
// console.log( days.length )

// Add items to the list
// we can use the PUSH method to add items to the END of an array
// days.push('RobDay')

// Remove items from a list
// we can use the POP method to remove items from the END of an array
// days.pop()

// Splice method
// can be used to both remove/add (or do both of those things) items
// at a specific index in the array
// days.splice(1, 3, "Funday", "SuperFunDay")

// Looping over arrays
// 4 Parts : 
//          1. Initializer - starting point
//          2. Loop Conditional - describes when the loop should loop
//          3. Loop Incrementor - how we increment the initializer
//          4. Loop Body - the code to execute for each iteration

// i = i + 1
// i += 1
// i++

// for(var i = 0; i < days.length; i++){
//     // console.log( i, days[i] )
    
//     var shortDay = days[i].replace('day', '')
//     console.log(shortDay)
// }


// Objects

// var animalHouse =  {
//     title : 'Animal House',
//     rating : 'G',
//     genre : 'College-themed coming of age frat comedy',
// }

// // Like arrays, we can access the values stored in the object

// // Bracket Notation - can accept strings or variables
// console.log( animalHouse['genre'] )
// var propertyImInterestedIn = 'title'
// console.log( animalHouse[propertyImInterestedIn] )

// // Dot Notation - requires the LITERAL property name
// animalHouse.title


// var dieHard = {
//     title : 'Die Hard',
//     rating : 'G',
//     genre : 'Christmas themed action coming of age frat comedy'
// }


// var movieLibrary = []
// movieLibrary.push(animalHouse, dieHard)


// for(var movie = 0; movie < movieLibrary.length; movie++){
    
//     console.log( 'The movie is : ',  movieLibrary[movie].title )
    
// }
// console.log('Start')

// var targetTime = '43016'

// for(var hours = 0; hours < 24; hours++ ){
   
//     // console.log('Top O the hour')
   
//   for(var minutes = 0; minutes < 60; minutes++){
       
        
//         for(var seconds = 0; seconds < 60; seconds++){
            
//             var time = hours.toString() + minutes.toString() + seconds.toString()
//             if(time === targetTime){
//                 // console.log('ALARM!!!')
//                 alert('!!!!!')
//                 break
//             }
//              console.log( hours + ':' + minutes + '::' + seconds)
//         }
//     }
// }
// console.log('End')


// function literal
var myFunction = function(){}


var calculateArea = function(height, width){
    var area = height * width
    return area
}

// to know what the value of calculateArea(10,5) is, we have to know what the return value is.
var result = calculateArea(10, 5)
// console.log(result)


// this is just a function reference
// console.log(calculateArea)


var anotherReference = calculateArea

// console.log(anotherReference)

var steve = {}
var janet = {}

steve.doSomething = calculateArea
janet.alsoDoSomthing = anotherReference

steve.doSomething(1,2)
calculateArea(1,2)


var pluralize = function(word, number){
    if ( number === 1 ) {
        return word
    }
    else {
        return word + 's'
    }
}
// console.log(pluralize('mongoose', 11))


var hello = 'hello'
var yelling = hello.toUpperCase()
// console.log(yelling)

var weekString = 'Monday Tuesday Wednesday Thursday Friday Saturday Sunday'

var weekArray = weekString.split(' ')
weekArray[2] = weekArray[2].toUpperCase()
var weekString = weekArray.join(', ')
// console.log(weekString)

var word2 = 'code'
var concat = function(word1){
    var output = word1 + ' ' + word2
    return output
}

var result = concat('write')

console.log(result)