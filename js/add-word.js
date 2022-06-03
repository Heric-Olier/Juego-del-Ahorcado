//*!<-------------- seccion agregar palabras -------------->*/

const fieldText = document.querySelector(".text-content"); // capturamos el text area
const btnSaveWord = document.querySelector(".save-word"); // capturamos el boton de guardar y empezar el juego
const textAlert = document.querySelector(".alert"); // capturamos el span donde se mostraran las alertas

const gameWords = [
  'ALURA',
  'PYTHON',
  'JAVA',
  'CAFE',
  'GATOS',
  'PROGRAMAR',
  'ELEFANTE',
  'HTML',
  'BACKEND',
  'FRONTEND',
  'DEVELOPER',
  'MADRE']; //palabras predeterminadas
  
  //creamos la funcion para mostrar las notificaciones de victoria o derrota

  const notification = (text, img) => {
    const imgAlert = document.createElement("img");
    textAlert.textContent = "";
    textAlert.classList.add("active");
    setTimeout(() => {textAlert.classList.remove("active") }, 2600);
    imgAlert.src = img;
    imgAlert.classList.add("icon-head");
    textAlert.textContent = text;
    textAlert.appendChild(imgAlert);
   
  };

  //agregamos las palabras del usuario al array de palabras predeterminadas
  
  function addWords() {
    let word = fieldText.value.toUpperCase();
    let WordValid = validateWord(word)
    if (WordValid) {
      gameWords.push(word);
      fieldText.value = "";
      console.log({ gameWords, word });
    }
  }


  
  //validamos que la palabra tenga mas de 3 letras y menos de 8
  let reg = new RegExp("^[a-zA-Z ]*$", "g");
  
  function validateWord(word) {
    if (word.length === 0) {
      setTimeout(() => {}, 1800);
      notification("No has ingresado ninguna palabra!", 'assets/icon-head-lose.svg');
      fieldText.value = "";
    }
    
    if (!reg.test(word)) {
      setTimeout(() => {}, 1800);
      notification("No se permiten numeros ni caracteres especiales!", 'assets/icon-head-lose.svg');
      fieldText.value = "";
      fieldText.focus();
      return false;
      
    }
    
    if (gameWords.includes(word)) {
      setTimeout(() => {}, 1800);
      notification("La palabra ya se encuentra agregada!", 'assets/icon-head-lose.svg');
      fieldText.value = "";
      fieldText.focus();
      return false;
    }

    if (word.length >= 3 && word.length <= 8) {
      setTimeout(() => {window.open("../Juego-del-Ahorcado/game.html", "_self")}, 2800);
      notification("Palabra agregada con Exito!", 'assets/icon-head-win.svg');
      return true;    
    } 
    
    if(word.length < 3) {
      setTimeout(() => {}, 1800);
      notification("Cantidad de Letras Invalidas!", 'assets/icon-head-lose.svg');
      fieldText.value = "";
      fieldText.focus();
    }
  }

    btnSaveWord.onclick = () => {
    addWords();
  };
  
  
