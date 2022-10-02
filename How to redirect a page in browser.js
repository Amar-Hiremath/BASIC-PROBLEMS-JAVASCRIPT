//Write a program to change the url to google.com (redirection) if user enters a number greater than 4

let num = prompt("Enter your number")
num = Number.parseInt(num)

if(num>4){
  location.href="https.//google.com"
}
