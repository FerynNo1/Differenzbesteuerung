const einkaufsPreis = document.getElementById("ek-id");
const verkaufsPreis = document.getElementById("vk-id");
const outputLabel = document.getElementById("output-label");
const calcButton = document.getElementById("calc-button");

calcButton.addEventListener("click", () => {
  let diffVat = (verkaufsPreis.value - einkaufsPreis.value) / 100 * 19;
  outputLabel.innerHTML =
    `Der Differenzbesteuerungsbetrag beträgt: ${diffVat.toFixed(2)} €.`
})