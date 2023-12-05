const prezzoKm = 0.21; //VARIABILE PRINCIPALE

const formEl = document.querySelector('form'); //VARIABILE CHE PRENDE TUTTO IL FORM


//INSERIMENTO LET IN TUTTE LE VOCI CHE COMPONGONO LA SEZIONE "IL MIO BIGLIETTO"
let pFullName = document.getElementById('pFullName');
let pOfferta = document.getElementById('pOfferta');
let pCostoBiglietto = document.getElementById('pCostoBiglietto');
let pCarrozza = document.getElementById('pCarrozza');
let pCodiceId = document.getElementById('pCodiceId');


formEl.addEventListener('submit', function (e) { //PER AGGANCIARE una funzione che sarà chiamata quando accade un evento
    e.preventDefault();

    //CREO LET E DO IL VALORE AI 3 CAMPI PRINCIPALI CHE DANNO L'INPUT (NOME-NUMERO KM-ETA')
    let fullNameValue = document.getElementById('fullName').value;
    let numeroKm = document.getElementById('numeroKm').value;
    let etaPasseggero = document.getElementById ('etaPasseggero').value;


    let prezzoBigliettoTot;
    let prezzoBiglietto = prezzoKm * numeroKm;


    if (etaPasseggero == 1){ //UGUAGLIANZA
        let scontoMinorenni = ((prezzoBiglietto * 20) / 100);
        let prezzoBigliettoTot = scontoMinorenni - prezzoBiglietto;
        pOfferta.innerHTML = 'tariffa minorenni'; //VADO A INSERIRE QUESTO TESTO ALL'INTERNO DELLA SEZIONE OFFERTA
        pCostoBiglietto.innerHTML = prezzoBigliettoTot.toFixed(2); //VADO A INSERIRE IL PREZZO TOTALE ALLA SEZIONE COSTO BIGLIETTO
    }
    else if (etaPasseggero == 2){
        let prezzoBigliettoTot = prezzoKm * numeroKm;
        pOfferta.innerHTML = 'tariffa maggiorenni';
        pCostoBiglietto.innerHTML = prezzoBigliettoTot.toFixed(2); //TO FIXED MI ARROTONDA IL NUMERO
    }
    else{
        let scontoOver65 = ((prezzoBiglietto * 40) / 100);
        let prezzoBigliettoTot = scontoOver65 - prezzoBiglietto;
        pOfferta.innerHTML = 'tariffa over 65';
        pCostoBiglietto.innerHTML = prezzoBigliettoTot.toFixed(2);
    }
    
    pFullName.innerHTML = fullNameValue; // QUESTO SERVE PER INSERIRE IN AUTOMATICO NOME E COGNOME
    
    //DARE NUMERI RANDOM ALLE SEZIONI
    document.getElementById("pCarrozza").innerHTML = Math.floor(Math.random('pCarrozza') * 10); 
    document.getElementById("pCodiceId").innerHTML = Math.floor(Math.random('pCodiceId') * 10000);
})

