//  Object Oriented Programming
// What is it?
    //  Model for programming based on the creation of objects
    // Objects can have PROPERTIES attached to them
    //  Strings, numbers, arrays, object, etc
    // Objects can also have METHODS attached to them
    //  Functions
    // Methods are CALLABLE properties (they're functions)
    
    // [].split() => method
    // [].length  => property


// var name = 'bill'
// var name2 = 'sally'
// var name3 = 'john'
// ...
// var address = '123 main st'
// var address2 = '456 oak dr'

// We want to contain our variables in OBJECTS to reduce the clutter in the global namespace and organize our code

// In Javascript we can create CLASSES to CONSTRUCT objects
//     Classes are like blueprints

// We make INSTANCES of CLASSES
//      Instances are like the finished building


// Making a CLASS
// How do we describe a cat?
// color
// breed
// clawedness
// brattiness
// function Cat (name, color, breed, clawedness, brattiness){
//     console.log('this!', this)
//     // var this = {}    => with new keyword
    
//     this.name = name;
//     this.color = color;
//     this.breed = breed;
//     this.clawedness = clawedness;
//     this.brattiness = brattiness;

//     // return this      => with new keyword
//     // return undefined => without new keyword
// }

// this is an arbitrary object.  with the NEW keyword, it becomes an empty object
// without the NEW keyword, it refers to the object the function is being called on (window for globally defined functions)


// Constructing an INSTANCE of the Cat CLASS
// We use the 'new' keyword when using class constructors
// var fluffy = new Cat(
//     'Fluffy',
//     'white',
//     'lion',
//     true,
//     8.5
// )

// CHALLENGE I
// Make a Class Constructor for breakfast cereals
//      name         => String
//      sweetness    => Number
//      crunchFactor => Number
//      mascotName   => String

// Make an INSTANCE of that class / console.log it

// var Cereal = function(name, sweetness, crunchFactor, mascotName){
//     this.name = name
//     this.sweetness = sweetness
//     this.crunchFactor = crunchFactor
//     this.mascotName = mascotName
// }


// ES2015 syntax
class Cereal{
    constructor(name, sweetness, crunchFactor, mascotName){
        this.name = name
        this.sweetness = sweetness
        this.crunchFactor = crunchFactor
        this.mascotName = mascotName

    }
    
    makeYouFat(){
        console.log('Eating ' + this.mascotName + '\'s cereal will make you fat')
    }
}

var captainCrunch = new Cereal(
    'Captain Crunch', 
    9, 
    10, 
    'Supreme Admiral Dr. Professor Crunch Ruler of the Beats of the Earth and conqueror of Britain everywhere but mostly in Uganda'
)

// function Cat (name, color, breed, clawedness, brattiness){
//     this.name = name;
//     this.color = color;
//     this.breed = breed;
//     this.clawedness = clawedness;
//     this.brattiness = brattiness;
//     // Attaching a method in this manner is not optimal.  10k cats would make 10k copies of an identical function
//     // this.meow = function(){
//     //     console.log('meow')
//     // }
// }
// // A BETTER way to attach methods is to use something called the PROTOTYPE
// // This will allow ALL instances of that class access to a method
// Cat.prototype.meow = function(){
//     console.log('The ' + this.color + ' cat says meow!')
// }






// ES2015
class Cat{
    constructor(name, color, breed, clawedness, brattiness){
        this.name = name;
        this.color = color;
        this.breed = breed;
        this.clawedness = clawedness;
        this.brattiness = brattiness;
    
    }
    
    meow(){
        console.log(this.name + ' goes meow!')
    }
}


var fluffy = new Cat(
    'Fluffy',
    'white',
    'lion',
    true,
    8.5
)

var poptart = new Cat(
    'Poptart the supreme ruler of all toasters in africa in general but uganda in particular',
    'sprinkles',
    'cartoon',
    false,
    10
)


// CHALLENGE II
// Take the cereal constructor from before and add a method to the prototype

// Call the method makeYouFat
    // console log how much someone eating cereal weighs
    
// Cereal.prototype.makeYouFat = function(){
//     console.log('eating ' + this.name + ' will make you fat!')
// }