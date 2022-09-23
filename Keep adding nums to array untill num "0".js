//Keep adding numbers to the array until '0' is added to the array

let ary =[1,2,3,4,5]
let num
do {
  num  = prompt("Enter a number")
  num = Number.parseInt(num)
  ary.push(num)
}
while (num != 0 ){
  console.log(ary) 
}

/*INPUT =  6
 *         7
 *         8  
 *         9
 *         0
 */

/*OUTPUT = [ 1, 2, 3, 4, 5,
 *          6, 7, 8, 9, 0 ]
 */             
