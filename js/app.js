const form = document.querySelector("form");
const password = document.querySelector("#password");
const passwordCon = document.querySelector("#passwordCon");
const validation = document.querySelectorAll(".validation");
const username = document.querySelector("#userName");
const email = document.querySelector("#email");
const tel = document.querySelector("#tel");
const exclamation = document.getElementsByClassName(".fa-circle-exclamation");``
const telReg = /^\d{3}-\d{2}-\d{3}-\d{2}-\d{2}$/;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!username.value) {
    validation[0].classList.add("validate");
  } else {
    validation[0].classList.remove("validation");
    validation[0].classList.add("success");
  }

  if (!email.value) {
    validation[1].classList.add("validate");
  } else {
    validation[1].classList.remove("validation");
    validation[1].classList.add("success");
  }

  if (!tel.value || !telReg.test(tel.value)) {
    validation[2].classList.add("validate");
  } else {
    validation[2].classList.remove("validation");
    validation[2].classList.add("success");
  }

  if (!password.value) {
    validation[3].classList.add("validate");
  } else if(password.value === passwordCon.value) {
    validation[3].classList.remove("validation");
    validation[3].classList.add("success");
  }

  if (!passwordCon.value) {
    validation[4].classList.add("validate");
  } else if(password.value === passwordCon.value) {
    validation[4].classList.remove("validation");
    validation[4].classList.add("success");
  }
});
