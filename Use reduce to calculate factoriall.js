// Use reduce to calculate factorial of a given number from an array of first n natural numbers (n being the number whoes factorial needs to be calculated)

let a = [1,2,3,4,5]
let n = a.reduce((x1, x2)=>{
  return (x1 * x2)
})
console.log(n)

//OUTPUT = 120
