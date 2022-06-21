// - CHIEDERE CHILOMETRI DA PERCORRERE
// - CHIEDERE ETA'
// - CALCOLARE PREZZO DEL BIGLIETTO (0.21€ PER KM)
// - SCONTO 20% MINORENNI
// - SCONTO 40% OVER 65
// - PREZZO STAMPATO IN PAGINA CON MASSIMO DUE DECIMALI (CENTESIMI)

const distance = parseInt(prompt('Quanti km devi percorrere?'));
console.log(distance)

const age = parseInt(prompt('Quanti anni hai?'));
console.log(age)

let price = distance * 0.21;
console.log(price)

priceParagraph = document.getElementById('price-paragraph')

if (age < 18) {
    price = (price - price * 20 / 100).toFixed(2)
    priceParagraph.innerHTML = `Ricevi uno sconto del <strong>20%</strong>! Il costo del tuo biglietto è di €<strong>${price}</strong>`;
}

else if (age > 65) {
    price = (price - price * 20 / 100).toFixed(2)
    priceParagraph.innerHTML = `Ricevi uno sconto del < strong > 40 %</strong > !Il costo del tuo biglietto è di €<strong>${price}</strong>`;
}

else {
    priceParagraph.innerHTML = `Il costo del tuo biglietto è di €<strong>${price}</strong>`;
}