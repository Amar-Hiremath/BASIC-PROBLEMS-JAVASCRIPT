//  Use console.error to log the error if the age entred is negative, while using prompt, alert and confirm

function ageVerifier(){
let age = prompt("Enter your age")
age = Number.parseInt(age)
 if(age<0){
        console.error("Invalid age")
        brake;
 }
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
