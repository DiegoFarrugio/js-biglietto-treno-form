//Scrivere un programma che chieda all'utente:
//- Il numero di chilometri da percorrere
//- Età del passeggero
//Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
//- il prezzo del biglietto è definito in base ai km (0.21 € al km)
//- va applicato uno sconto del 20% per i minorenni
//- va applicato uno sconto del 40% per gli over 65.


//VARIABILI PRINCIPALI




const prezzoKm = 0.21;

const formEl = document.querySelector('form');




//CALCOLI PER PREZZO BIGLIETTO NORMALE, UNDER E OVER 65.

/* let prezzoBiglietto = numeroKm * prezzoKm; 
console.log('Prezzo Biglietto', prezzoBiglietto);

let scontoMinorenni = ((prezzoBiglietto * 20) / 100);
let prezzoBigliettoMinorenni = scontoMinorenni - prezzoBiglietto;
console.log('Prezzo minorenni', prezzoBigliettoMinorenni);


let scontoOver65 = ((prezzoBiglietto * 40) / 100);
let prezzoBigliettoOver65 = scontoOver65 - prezzoBiglietto;
console.log('Prezzo Over 65', prezzoBigliettoOver65); */

// VARIANTI

/* if (isNaN (numeroKm) || isNaN (etaPasseggero)){
    console.log('Errore, inserire un numero!');
}


if(etaPasseggero <18){
    console.log('prezzoBigliettoMinorenni', prezzoBigliettoMinorenni);
}
else if(etaPasseggero >65){
    console.log('prezzoBigliettoOver65', prezzoBigliettoOver65);
}
else{
    console.log('Prezzo totale biglietto', prezzoBiglietto);{
    }
    console.log('Operazione corretta!'); */
/* } */

let pFullName = document.getElementById('pFullName');
let pOfferta = document.getElementById('pOfferta');
let pCostoBiglietto = document.getElementById('pCostoBiglietto');
let pCarrozza = document.getElementById('pCarrozza');
let pCodiceId = document.getElementById('pCodiceId');



formEl.addEventListener('submit', function (e) {
    e.preventDefault();
    let fullNameValue = document.getElementById('fullName').value;
    let numeroKm = document.getElementById('km').value;
    let etaPasseggero = document.getElementById('selectEta').value;
    let prezzoBigliettoTot;
    let prezzoBiglietto = numeroKm * prezzoKm;
    if (etaPasseggero == 1) {
        let scontoMinorenni = ((prezzoBiglietto * 100) / 20);
        prezzoBigliettoTot = scontoMinorenni - prezzoBiglietto;
        pOfferta.innerHTML = "offerta minorenne";
        pCostoBiglietto.innerHTML = prezzoBigliettoTot.toFixed(2);;
    }
    else if (etaPasseggero == 2) {
        prezzoBigliettoTot = prezzoBiglietto;
        pOfferta.innerHTML = "offerta maggiorenne";
        pCostoBiglietto.innerHTML = prezzoBigliettoTot;
    }
    else {
        let scontoOver65 = ((prezzoBiglietto * 100) / 40);
        prezzoBigliettoTot = scontoOver65 - prezzoBiglietto;
        pOfferta.innerHTML = "offerta over65";
        pCostoBiglietto.innerHTML = prezzoBigliettoTot.toFixed(2);
    }

    pFullName.innerHTML = fullNameValue;
    pCarrozza.innerHTML = Math.floor(Math.random() * 11);
    pCodiceId.innerHTML = Math.floor(Math.random() * 10000);

})



