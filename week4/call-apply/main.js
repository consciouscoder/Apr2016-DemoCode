// What is `this`? 
// in most cases, this is simply the object that a function is called off of.

// var whatsMyName = function(){
//     console.log('My name is ' + this.name + '.')
// }

// // whatsMyName()

// var alice = {
//     name : 'Alice',
//     greet : whatsMyName,
// }

// alice.greet()

// var obj = {
//     method : function(){
//         var that = this
//         var inner = function(){
//             console.log('this name is ', that.name)
//         }
//         inner()
//     },
//     name : 'Bob'
// }

// obj.method()


var whatsMyName = function(excited, secondArg, thirdArg){
    // console.log(secondArg, thirdArg)
    if ( excited ) {
        var ending = '!!'
    }
    else {
        var ending = '.'
    }
    console.log('My name is ' + this.name + ending)
}

var alice = {
    name : 'alice',
}
var rob = {
    name : 'rob'
}

// whatsMyName.call(alice, true, 10, 100) // call the whatsMyName function, but use the alice object for `this`

var biggify = function(){
    var biggerArgs = [].map.call(arguments, function(element){
        return element * 10
    })
    return biggerArgs
}

// console.log(biggify(1,20,300))

var HELLO = [].map.call('hello', function(element){
    return element.toUpperCase()
}).join('')

// console.log(HELLO)

// whatsMyName.apply(alice, [true, 10, 'hi'])


var numbers = [ 27, 22, 5, 23, 7]

// math.max doesn't care about `this`, so we just pass in a placeholder
// console.log(Math.max.apply(null, numbers))


var bob = {
    name : 'Bob'
}

// bobSaysHi is nearly identical to whatsMyName, except that the value of `this` has been bound to `bob`
var bobSaysHi = whatsMyName.bind(bob)

// bobSaysHi(true)

var carlos = {
    name : 'Carlos',
}

var carlosIsHappyToSeeYou = whatsMyName.bind(carlos, true)
carlosIsHappyToSeeYou(false)

navigator.getUserMedia()
navigator.mozGetUserMedia
navigator.webkitGetUserMedia
navigator.MSGetUserMedia

var getUserMedia = navigator.mozGetUserMedia || navigator.webkitGetUserMedia || navigator.getUserMedia


if ( getUserMedia ) {
    getUserMedia = getUserMedia.bind(navigator)
}
