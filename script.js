const words = [
    { word: "くるま", image: "Imagenes/Carro.jpg" },
    { word: "いえ", image: "Imagenes/Casa.jpeg" },
    { word: "でんわ", image: "Imagenes/Telefono.jpg" },
    { word: "いぬ", image: "Imagenes/Perro.jpg"},
    { word: "ねこ", image: "Imagenes/Gato.png"},
];

let currentWordIndex = 0;
const imageElement = document.getElementById("image");
const guessInput = document.getElementById("guess");
const resultDiv = document.getElementById("result");
const guessButton = document.getElementById("guess-button");

function startGame() {
    if (currentWordIndex < words.length) {
        const currentWord = words[currentWordIndex];
        imageElement.src = currentWord.image;
        guessInput.value = "";
        resultDiv.innerHTML = "";
    } else {
        resultDiv.innerHTML = "¡Has adivinado todas las palabras! Dale a Siguiente";
        const siguienteB = document.getElementById("siguiente"); 
        siguienteB.removeAttribute("disabled");
        siguienteB.addEventListener("click", function(){
            window.location.href="pagina1.html";
        })
        siguienteB.style.display="block"
    }
}

function checkGuess() {
    const currentWord = words[currentWordIndex];
    const userGuess = guessInput.value.toLowerCase().trim();
    
    if (userGuess === currentWord.word.toLowerCase()) {
        resultDiv.innerHTML = "¡Correcto!";
        currentWordIndex++;
        setTimeout(startGame, 1000);
        guessInput.classList.remove("incorrect");
    } else {
        resultDiv.innerHTML = "Inténtalo de nuevo.";
        guessInput.classList.add("incorrect");
    }
}


guessButton.addEventListener("click", checkGuess);


startGame();
