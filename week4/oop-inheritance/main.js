// // Our SUPER class
// function Car (make, model, year){
//     this.make = make
//     this.model = model
//     this.year = year
   
// }
// Car.prototype = new Vehicle()
// Car.prototype.constructor = Car

// Car.prototype.honk = function(){
//     console.log('The ' + this.model + ' goes HONK!')
// }
// Car.prototype.drive = function(){
//     console.log('The ' + this.model + ' goes driving around town')
// }

// var gremlin = new Car('American Motors Corporation', 'Gremlin', 1922)

// // DRY - Dont Repeat Yourself
// // SelfDrivingCar Constructor
// // Our SUB class
// function SelfDrivingCar (make, model, year, OS){
//     // Passing the SDC this into the Car Constructor
//     Car.call(this, make, model, year)
//     this.OS = OS
// }
// // Right now, our SDC is NOT inheriting from Car
// // We want to make sure our SDC can access methods from the Car class

// SelfDrivingCar.prototype = new Car() // Resets SDC proto to be the Car proto
// SelfDrivingCar.prototype.constructor = SelfDrivingCar // Because we reset the proto on SDC, it overwrote the contructor function.  We need to set it back to the original value
// SelfDrivingCar.prototype.drive = function(){
//     console.log('It\'s driving on its own!')
// }

// var googleCar = new SelfDrivingCar('Google', 'ChromeCar', 2018, 'Android 2.3')

// // var Vehicle = function(){}// does NOT get hoisted
// // function Vehicle(){}// Gets hoisted so we can use it above
// function Vehicle (price){
//     this.price = price
// }
// Vehicle.prototype.becomePlayer = function(){
//     console.log('The $' + this.price + ' vehicle has sprouted legs!')
// }
// var hoverBoat = new Vehicle(10000)


// -------- ES6 -------- \\
var vehicles = []
class Vehicle{
    constructor(price){
        this.price = price
        vehicles.push(this)
    }
    // Example of a static method
    // They are attached to the CLASS not the INSTANCES (does not exist on the prototype)
    static numVehicles(){
        return vehicles.length
    }
    // Prototype method
    // They are attached to the INSTANCES of a class
    becomePlayer(){
        console.log('The $' + this.price + ' vehicle sprouted legs!')
    }
    
}

var hoverBoat = new Vehicle(10000)

// Extends is what sets up inheritance in ES6
class Car extends Vehicle{
    constructor(price, make, model, year){
        super(price) // Calling the SUPERCLASSE'S constructor
        this.make = make
        this.model = model
        this.year = year
    }
    becomePlayer(){
        super.becomePlayer() // Calls the becomePlayer method on our SUPER class
        console.log('The ' + this.model + ' explodes with leggy fury.')
    }
}

var gremlin = new Car(5000, 'American Mongo', 'Gremlin', 1922)

class SelfDrivingCar extends Car{
    constructor(price, make, model, year, OS){
        super(price, make, model, year)
        this.OS = OS
        
    }
}
var googleCar = new SelfDrivingCar(45000, 'Google', 'ChromeCar', 2018, 'Android')

