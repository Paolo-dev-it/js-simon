// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

let arrayNumbers = []; //Array vuoto con i numeri random
let arrayNumbersUser = []; //Array vuoto con i numeri inseriti dall'utente
let numbersCorrect = []; //Array vuoto con i numeri corretti
let correct = document.getElementById('correct');

for(let i = 0; i < 5; i++){ // Ciclo che crea 5 numeri random e li pusha all'interno nell'array vuoto
    
    let numberCasual = randomNumber();

    function randomNumber(){

    let randomNumber = Math.floor(Math.random(1) * 100);
    return randomNumber;

    }

    arrayNumbers.push(numberCasual)
}


document.getElementById('numbers').innerHTML = `${arrayNumbers}`; //Scrivo sul dom i numeri nell'array

setTimeout( function(){ // Funzione timeout, dopo 5 secondi fa scomparire i numeri
    hideElements();
}, 5000 );

setTimeout( function(){ // Funzione timeout, dopo 5,1 secondi richiama la funzione con i prompt
    functionTime(); 
}, 5100 );


function hideElements(){
     document.getElementById('numbers').innerHTML = ''; 
}

function functionTime(){ //Funzione che crea i 5 prompt dove l'utente inserisce i suoi numeri
    for(let n = 0; n < 5; n++){
        let time = parseInt(prompt('Scrivi il numero, se te lo ricordi ;)'))
        arrayNumbersUser.push(time)    
    }
    document.getElementById('counter').innerHTML = `${arrayNumbersUser}`;

    check();
}


function check(){ //Creo la funzione di controllo dei numeri
    for (let x = 0; x < arrayNumbers.length; x++){ //Ciclo che controlla per la lunghezza dell'array 

        for (let k = 0; k < arrayNumbersUser.length; k++){//Ciclo che controlla se i numeri all'interno degli array sono uguali

         if(arrayNumbers[x] == arrayNumbersUser[k]){ //Se i valori dell'array con i numeri random e i valori dell'array dell'utente sono uguali

            numbersCorrect.push(arrayNumbersUser[k]); //Li pusha all'interno dell'array corretto vuoto
            

         }

      }

    }
console.log(numbersCorrect);
    let controlCorrect = numbersCorrect.length; //Variabile per la lunghezza dell'array con i numeri corretti

    correct.innerHTML = `Hai inserito ${controlCorrect} numeri corretti su 5: ${numbersCorrect}` 

}



console.log(arrayNumbers)
console.log(arrayNumbersUser)

