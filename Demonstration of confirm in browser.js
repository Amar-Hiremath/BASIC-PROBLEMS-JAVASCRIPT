/*Write a program using promopt function to take input of age as a value top tell from the user and user alert to tell him if he can drive and confirm to ask the user 
if he wants to see the prompt again*/

function ageVerifier(){
let age = prompt("Enter your age")
age = Number.parseInt(age)
  if(age){
        
 if ( age >= 18 ){
  alert("Yes, you can drive")
}
else {
  alert("No, you cannot drive")
  age = confirm("do you want to run it again ?")
  if(age===true){
    ageVerifier();
  }
  else{
    return
  }
}
}
  else{
    return 
  }
}

ageVerifier()
