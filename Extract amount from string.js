// Extract the amount out of this string "Please give rupees 1000"

let strg = "Please give rupees 1000 "
let amount = strg.slice("Please give rupees".length)
console.log(amount)

// OUTPUT = hiremath

// Another way to do it 

let strg = "Please give rupees 1000"
let amount = strg.slice(5)
console.log(amount)

// OUTOUT = hiremath
