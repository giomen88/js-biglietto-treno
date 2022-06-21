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

const price = distance * 0.21;
console.log(price)

smallDiscount = price - (price * 20 / 100)
console.log(smallDiscount)

bigDiscount = price - (price * 40 / 100)
console.log(bigDiscount)

priceParagraph = document.getElementById('price-paragraph')


if (age < 18) {
    priceParagraph.innerHTML = `Ricevi uno sconto del 20%! Il costo del tuo biglietto è di €${smallDiscount}`;
}

if (age > 65) {
    priceParagraph.innerHTML = `Ricevi uno sconto del <strong>40%</strong>! Il costo del tuo biglietto è di €<strong>${bigDiscount}</strong>`;
}