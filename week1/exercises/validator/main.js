// IsNumber function
var isNumber = function(n) { 
    return !isNaN(parseFloat(n)) && isFinite(n); 
}

// ----------------------------- \\
// -------  Phone Number ------- \\
// ----------------------------- \\
// Initial prompt for user's phone number
var phoneNumber = prompt('Enter your phone number \n XXX-XXX-XXXX')
// Assuming the phone number is valid, why?
var validPhone = true;

// Length check
if(phoneNumber.length !== 12){
    validPhone = false
}

// Check for dashes / numbers
for(var i = 0; i < phoneNumber.length; i++){
    // On certain indexes, check for a dash
    if( i === 3 || i === 7){
        if(phoneNumber[i] !== '-'){
            validPhone = false
        }
    }
    // On other indexes, make sure it's a number!
    else{
        if( !isNumber(phoneNumber[i]) ){
            validPhone = false
        }
    }
}

// Alert the proper message
alert(validPhone ? 'Sweet phone number' : 'Definitely not a phone number')

//condition ? TRUE : FALSE


// --------------------------- \\
// -------  Birth Date ------- \\
// --------------------------- \\
// Initial prompt for user's Birth Date
var birthDate = prompt('Enter your birth date \n XX/XX/XX')
// Assuming the birth date is valid
var validBirth = true;

// Length check
if(birthDate.length !== 8){
    validBirth = false
}

// Check for slashes / numbers
for(var i = 0; i < birthDate.length; i++){
    // On certain indexes, check for a slash
    if( i === 2 || i === 5){
        if(birthDate[i] !== '/'){
            validBirth = false
        }
    }
    // On other indexes, make sure it's a number!
    else{
        if( !isNumber(birthDate[i]) ){
            validBirth = false
        }
    }
}

// Alert the proper message
alert(validBirth ? 'That\'s my birthday too!' : 'Bad birthday brah')


// ---------------------------- \\
// -------  Postal Code ------- \\
// ---------------------------- \\

var postCode = prompt('What\'s your postal code? \n XXXXX \n or \n XXXXX-XXXX')
var validPost = true

if(postCode.length !== 5 && postCode.length !== 10){
    validPost = false
}

for(var i = 0; i <  postCode.length; i++){
    
    if( i === 5 ){
        if(postCode[i] !== '-'){
            validPost = false
        }
    }
    else{
        if(!isNumber(postCode[i])){
            validPost = false
        }
    }
}

alert(validPost ? 'Zip' : ':(')



// ----------------------- \\
// -------  State  ------- \\
// ----------------------- \\

var stateAbbr = prompt('State your state \n XX (all caps)')

// Array of state abbreviations
var states = ["AL", "AR", "AK", "AZ", "CA", "CO", "CT", "DE", "DC", "FL", "GA",
              "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA",
              "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY",
              "NC", "ND", "OH", "OK", "OR", "PA", "PR", "RI", "SC", "SD", "TX",
              "TN", "UT", "VT", "VA", "WA", "WV", "WI", "WY"]

// indexOf is an array method.  It allows us to check and see if a value exists in an array and what index it exists at
// if the value does NOT exist in the array, it returns a -1
alert(states.indexOf(stateAbbr) > -1 ? 'I live there too!' : 'Where the hell is that?')


// ------------------------- \\
// -------  Married  ------- \\
// ------------------------- \\

var married = prompt('Are you married? \n Yes or No (any caps)')

// Lowercase the answer so it is standardized and easy to compare
if (married.toLowerCase() === 'yes' || married.toLowerCase() === 'no'){
    alert('Success!')
}
else{
    alert('Failure!')
}

