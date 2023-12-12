"use strict";
import validateEmail from "./validMailChecker.js";

const subscribeBtn = document.getElementById("subscribe");
const inputEmailEL = document.getElementById("email");
const errorMsg = document.querySelector(".error-message");

subscribeBtn.addEventListener("click", checkMail);

function checkMail() {
  const userEmail = inputEmailEL.value;

  if (validateEmail(userEmail)) {
    inputEmailEL.classList.remove("error-border");
    errorMsg.style.display = "none";
    alert("You are subscribed successfully ✅");
  } else {
    inputEmailEL.classList.add("error-border");
    errorMsg.style.display = "block";
  }
}
