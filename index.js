"use strict";
const botao = document.getElementById("btn");
botao.addEventListener("click", () => {
    const alcool = parseFloat(document.getElementById("alcool").value);
    const gasolina = parseFloat(document.getElementById("gasolina").value);
    const razao = alcool / gasolina;
    let resultado;
    if (razao <= 0.7) {
        resultado = "Abasteça com álcool";
        alert("Abasteça com álcool");
    }
    else {
        resultado = "Abasteça com gasolina";
        alert("Abasteça com gasolina");
    }
    const resultadoElement = document.getElementById("resultado");
    resultadoElement.textContent = resultado;
});
