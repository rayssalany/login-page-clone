const loginSection = document.querySelector("section");
const fgtPassword = document.querySelector("#forget-password");
const loginBtn = document.querySelector("#login-btn");
const registerBtn = document.querySelector("#register-link");
const registerField = document.querySelector(".registrer-field")
const cnclBtn = document.querySelector("#cancel-btn")
const cnfrBtn = document.querySelector("#confirm-btn")
const fgtPasswordField = document.querySelector(".forgot-password-field")


fgtPassword.addEventListener("click", (e) => {
  e.preventDefault();
  loginSection.style.display = 'none';
  fgtPasswordField.style.display = 'flex';
  registerField.style.display = 'none'; 
});

cnclBtn.addEventListener("click", () => {
  fgtPasswordField.style.display = 'none';
  loginSection.style.display = 'flex';
  registerField.style.display = 'none';
});

registerBtn.addEventListener("click", (e) => {
  e.preventDefault();
  loginSection.style.display = 'none';
  fgtPasswordField.style.display = 'none';
  registerField.style.display = 'flex';
});