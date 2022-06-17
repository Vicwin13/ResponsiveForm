let FirstName = document.getElementById("FirstName");
let LastName = document.getElementById("LastName");
let email = document.getElementById("email");
let password = document.getElementById("password");

let submit = document.getElementById("submit");
let icons = document.getElementById("icon");
let icon2 = document.getElementById("icon2");
let icon3 = document.getElementById("icon3");
let icon4 = document.getElementById("icon4");



submit.addEventListener("click", validate);


function validate(){

 console.log("You clicked on the submit button")

icons.style.visibility = "visible";
FirstName.style.border = " 1.5px solid red"
FirstName.style.boxShadow = "0px 0px 1px 2px rgba(243, 52, 52, .7)"

icon2.style.visibility = "visible";

LastName.style.border = " 1.5px solid red"
LastName.style.boxShadow = "0px 0px 1px 2px rgba(243, 52, 52, .7)"

icon3.style.visibility = "visible";

email.style.border = " 1.5px solid red"
email.style.boxShadow = "0px 0px 1px 2px rgba(243, 52, 52, .7)"

icon4.style.visibility = "visible";

password.style.border = " 1.5px solid red"
password.style.boxShadow = "0px 0px 1px 2px rgba(243, 52, 52, .7)"



};