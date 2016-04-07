// console.log('hello javascript!')

// number literal
4
10
3.1415926535
-10

1 + 2
3 - 1
2 * 5
10 / 3
// console.log(10 % 3) // modulus operator


var result = 10 / 3

// console.log(result)

var greeting = 'Hello' + ' world.'
// console.log(greeting)
var eleven = '1' + '1'
// console.log(eleven)
var math = '1 + 1'
// console.log(math)

// accessing a property with dot-notation
// console.log(greeting.length)

// accessing a property with bracket-notation
// console.log(greeting['length'])

var property = 'length'
// console.log(greeting[property])

// console.log(greeting[greeting.length - 1])

// console.log(!!!!!!!!!!!!!!!!!true)

// one 'false' value makes the whole expression false
// console.log(true && true && true && true && true && false)

// console.log(false || false || false || false || false || true)

// console.log(4 === 4)
// console.log(4 <= 8)


// if ( false ) {
//     console.log("it's true!")
// }
// else if ( 1 !== 1 ) {
//     console.log("1 is 1")
// }
// else {
//     console.log('none of the above')
// }

// var country = 'canada'
var country = 'texas'

var age = 19
var canDrink = false

if ( age >= 21 ) {
    canDrink = true
}
else if ( age >= 18 && country === 'canada' ) {
    canDrink = true
}
else {
    canDrink = false
}

// console.log('Will you be served? ' + canDrink)

// if this 'if' is true, we don't even evaluate the else-if
// if ( 1===1 ) { console.log('yes')}
// else if ( 1===1 ) { console.log('yes')}


// console.log(null)
// console.log(undefined)
var foo = undefined
// console.log(foo) // if you don't give a variable a value, it has the value undefined.


if ( NaN ) {
    console.log('truthey!')
}
else {
    console.log('falsey!')
}