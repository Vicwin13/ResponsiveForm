let FirstName = document.getElementById("FirstName");
let LastName = document.getElementById("LastName");
let email = document.getElementById("email");

let submit = document.getElementById("submit");
let icons = document.getElementById("icon");
let icon2 = document.getElementById("icon2");
let icon3 = document.getElementById("icon3");

FirstName.addEventListener("keyup", (key) => {
  let pattern1 = /[\D]$/;
  let results = pattern1.test(key.target.value);
  if (!results) {
    icons.style.visibility = "visible";
  } else {
    icons.style.visibility = "hidden";
  }
});

LastName.addEventListener("keydown", (key) => {
  let pattern1 = /[\D]$/;
  let results = pattern1.test(key.target.value);
  if (!results) {
    icon2.style.visibility = "visible";
  } else {
    icon2.style.visibility = "hidden";
  }
});

email.addEventListener("keydown", (key) => {
  let pattern2 = /^[^ ]+@[^ ]+\.[a-z]{1,3}$/;
  let results2 = pattern2.test(key.target.value);
  if (results2) {
    icon3.style.visibility = "hidden";
  } else {
    icon3.style.visibility = "visible";
  }
});
