/*Write a program using promopt function to take input of age as a value top tell from the user and user alert to tell him if he can drive and confirm to ask the user 
if he wants to see the prompt again*/

let runAgain = true;
while(runAgain){
let age = prompt("Enter your age")
age = Number.parseInt(age)

const canDrive =(age)=>{
  return (age>=18)? true:false
}
if (canDrive(age)){
  alert("Yes, you can drive")
}
else{
  alert("No, you cannot drive")
}
  runAgain = confirm("Do you want to run again ?")
}


//Another way of doing it is 


function ageVerifier (){
let age = prompt("enter your age")
if(age){
if(age>=18)
{
	alert("yes you can drive")
}else{
	alert("No you can not drive")
    let con = confirm("do you want to run again")
    	if(con===true)
        {
        	ageVerifier()
        }
        else{
        	return
        }
	}
    }
    else return
}
ageVerifier()
