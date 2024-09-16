const botao = document.getElementById("btn") as HTMLButtonElement;

botao.addEventListener("click", () => {
  const alcool: number = parseFloat(
    (document.getElementById("alcool") as HTMLInputElement).value
  );
  const gasolina: number = parseFloat(
    (document.getElementById("gasolina") as HTMLInputElement).value
  );

  const razao: number = alcool / gasolina;
  let resultado: string;

  if (razao <= 0.7) {
    resultado = "Abasteça com álcool"
    alert("Abasteça com álcool");
  } else {
    resultado = "Abasteça com gasolina"
    alert("Abasteça com gasolina");
  }

  const resultadoDiv = document.getElementById(
    "resultado"
  ) as HTMLDivElement;
  resultadoDiv.textContent = resultado;
});
