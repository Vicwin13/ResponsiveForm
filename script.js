let firstName = document.getElementById("FirstName").value;
let lastName = document.getElementById("LastName");
let email = document.getElementById("email");
let  password = document.getElementById("password");
let submit = document.getElementById("submit");
let firstNameError = document.querySelector(".FirstError");
let Input = document.getElementById("FirstName");
let icon = document.getElementsByClassName("first");



submit.addEventListener("click", validate);


function validate(){

   if (firstName.length == 0){
        firstNameError.innerHTML= "Input First name";
        firstNameError.style.color = "red";
        Input.style.border ="1px solid red";
        return false;
   } if (!firstName.match(/^[A-Za-z]*&/)){
    
        firstNameError.innerHTML = "use the right characters"
   }


};