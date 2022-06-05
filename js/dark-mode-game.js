const btnSwitch = document.querySelector("#switch-mode"); //boton de cambio de modo
const logoTitleGameLight = document.querySelector(".logo-title-game"); //logo principal de la pestaña de juego en modo claro
const logoTitleGameDark = document.querySelector(".logo-title-game-dm"); //logo principal de la pestaña de juego en modo oscuro

btnSwitch.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  btnSwitch.classList.toggle("active");

  if (logoTitleGameLight.classList.contains("disabled")) {
    logoTitleGameLight.classList.remove("disabled");
    logoTitleGameDark.classList.remove("active");

    logoTitleGameLight.classList.add("active");
    logoTitleGameDark.classList.add("disabled");
  } else {
    logoTitleGameLight.classList.remove("active");
    logoTitleGameDark.classList.remove("disabled");

    logoTitleGameLight.classList.add("disabled");
    logoTitleGameDark.classList.add("active");
  }

});
