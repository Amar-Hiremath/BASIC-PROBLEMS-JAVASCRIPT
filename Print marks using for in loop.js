// Write a program to print the marks of student in an object using for in loops

 let marks = {
   harry : 98,
   rohan: 70,
   aakash:7
 }

for( let key in marks){
  console.log("Marks of "+ key +" are "+ marks[key])
}
