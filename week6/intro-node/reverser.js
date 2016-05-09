// ----- CHALLENGE ----- \\
// Use a node script that accepts a string as an argument and reverses it
// EX : 'potato' => 'otatop'

// Our own first argument comes in @ index 2 in the argv
var string = process.argv[2];

var reversed = string
                .split('') // Turn String into Array
                .reverse() // Reverse Array order
                .join('')  // Turn Array into String

console.log(reversed)