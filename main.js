let attempts = 10; // Intentos iniciales
let score = 0; // Puntuación del jugador

function checkGuess() {
    const guess = parseInt(document.getElementById("guess").value);
    const messageElement = document.getElementById("message");
    const resultElement = document.getElementById("result");
    const wrongImage = document.getElementById("wrong-image");
    const correctImage = document.getElementById("correct-image");

    const computerGuess = Math.floor(Math.random() * 15) + 1; // Adivinanza de la computadora (del 1 al 15)

    if (isNaN(guess) || guess < 1 || guess > 15) {
        messageElement.textContent = "Ingresa un número válido entre 1 y 15.";
    } else {
        attempts--;

        if (guess === computerGuess) {
            score++; // Incrementar la puntuación si adivina
            messageElement.textContent = "¡Felicidades! Has adivinado el número.";
            correctImage.style.display = "block"; // Mostrar la imagen correcta
            wrongImage.style.display = "none"; // Ocultar la imagen equivocada
        } else if (guess < computerGuess) {
            messageElement.textContent = "El número es mayor. Intenta de nuevo.";
            wrongImage.style.display = "block"; // Mostrar la imagen equivocada
            correctImage.style.display = "none"; // Ocultar la imagen correcta
        } else {
            messageElement.textContent = "El número es menor. Intenta de nuevo.";
            wrongImage.style.display = "block"; // Mostrar la imagen equivocada
            correctImage.style.display = "none"; // Ocultar la imagen correcta
        }

        // Mostrar el número que eligió la computadora
        resultElement.textContent = `La computadora eligió: ${computerGuess}`;

        if (attempts === 0) {
            messageElement.textContent = `¡Agotaste tus ${score} intentos! El número de la computadora era ${computerGuess}.`;
            document.getElementById("checkButton").disabled = true;
        }
    }

    // Mostrar puntuación y cantidad de intentos restantes
    document.getElementById("score").textContent = `Puntuación: ${score}`;
    document.getElementById("attempts").textContent = `Intentos restantes: ${attempts}`;
}

document.getElementById("checkButton").addEventListener("click", checkGuess);
