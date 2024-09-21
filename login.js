// console.log("added an clicked login form");

document
  .getElementById("button-login")
  .addEventListener("click", function (event) {
    event.preventDefault();
    console.log("clicked login");
  });

const phoneNum = document.getElementById("phone-number").value;
console.log(phoneNum);
