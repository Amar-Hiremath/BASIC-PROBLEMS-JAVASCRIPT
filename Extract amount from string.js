// Extract the amount out of this string "Please give rupees 1000"

let strg = "Please give rupees 1000 "
let amount = strg.slice("Please give rupees".length)
console.log(amount)

// OUTPUT = 1000

// Another way to do it 

let strg = "Please give rupees 1000"
let amount = strg.slice(15)
console.log(amount)

// OUTOUT = 1000
