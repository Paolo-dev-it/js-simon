// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

let arrayNumbers = [];
let arrayNumbersUser = [];

for(let i = 0; i < 5; i++){
    
    let numberCasual = randomNumber();

    function randomNumber(){

    let randomNumber = Math.floor(Math.random(1) * 100);
    return randomNumber;

    }

    arrayNumbers.push(numberCasual)
}


document.getElementById('numbers').innerHTML = `${arrayNumbers}`;

setTimeout( function(){
    functionTime();
}, 5000 );


function functionTime(){
    document.getElementById('numbers').innerHTML = '';
    
    for(let n = 0; n < 5; n++){
        var time = parseInt(prompt('Scrivi il numero, se te lo ricordi ;)'))
        arrayNumbersUser.push(time)  
    }
    
}

console.log(arrayNumbers)
console.log(arrayNumbersUser)

