const form = document.getElementById("login-form");
const popup = document.getElementById("popup");
const popupMsg = document.getElementById("popup-msg");
const popupClose = document.getElementById("popup-close");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = form.email.value.trim();
  const senha = form.senha.value.trim();

  if(email === "" || senha === "") {
    showPopup("Preencha todos os campos!", false);
    return;
  }

  showPopup("Login realizado com sucesso!", true);
});

popupClose.addEventListener("click", () => {
  popup.classList.remove("show");
});

function showPopup(message, success) {
  popupMsg.textContent = message;
  popup.style.color = success ? "#0f0" : "#f33";
  popup.classList.add("show");

  setTimeout(() => {
    popup.classList.remove("show");
  }, 2500);
}

// === Dark Mode ===
let darkmode = localStorage.getItem('darkmode');
const themeSwitch = document.getElementById('theme-switch');

const enableDarkmode = () => {
  document.documentElement.classList.add('darkmode');
  localStorage.setItem('darkmode', 'active');
}

const disableDarkmode = () => {
  document.documentElement.classList.remove('darkmode');
  localStorage.setItem('darkmode', null);
}

// Aplica dark mode se já estava ativo
if(darkmode === "active") enableDarkmode();

themeSwitch.addEventListener("click", () => {
  darkmode = localStorage.getItem('darkmode');
  darkmode !== "active" ? enableDarkmode() : disableDarkmode();
});

