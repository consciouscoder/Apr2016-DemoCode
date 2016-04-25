var Burglar = function(name){
    this.name = name
    this.dead = false
    this.stuff = ['knoife', 'lockpick', 'gloves, i guess?', 'map', 'grappling hook']

}
Burglar.prototype.steal = function(victim){
    if ( victim.stuff.length != 0 ) {
        var item = victim.stuff.pop()
        this.stuff.push(item)
        console.log(this.name + ' stole ' + item + ' from ' + victim.name + '.')
        console.log(this.name + ' now has ' + this.stuff.join(', ') + '.')
        console.log(victim.name + ' now has ' + victim.stuff.join(', ') + '.')
        console.log('=-=-=-=-=-=-=-=-=-=-=-=-=')
    }
    else {
        victim.dead = true
        console.log('hasta la vbista, ' + victim.name)
        console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=')
    }
}

// var alice = new Burglar('alice')
// var bob = new Burglar('bob')
// we're calling the steal method off of alice, passing in bob as a victim. thus, alice is stealing from bob.
// alice.steal(bob)

var cityOfThieves = []

for ( var i = 0; i < 10; i++ ) {
    cityOfThieves.push(new Burglar('alice-' + i))
}

// console.log(cityOfThieves)
// 0 - 9
var randomTheft = function(){
    // this is a popular javascript idiom for choosing a random element from an array
    var burglar = cityOfThieves[Math.floor(Math.random() * cityOfThieves.length)]
    var victim  = cityOfThieves[Math.floor(Math.random() * cityOfThieves.length)]
    if ( burglar !== victim ) {
        burglar.steal(victim)
    }
}

burgleInterval = setInterval(function(){

    cityOfThieves = cityOfThieves.filter(function(thief){
        if      ( thief.dead === false ) { return true  }
        else if ( thief.dead === true  ) { return false }
        // return !thief.dead

    })

    if ( cityOfThieves.length > 1 ) {
        randomTheft()
    }
    else {
        console.log(cityOfThieves[0].name + ' says: There can be only one.')
        clearInterval(burgleInterval)
    }
}, 2)
