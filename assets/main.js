// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

let arrayNumbers = [];
let arrayNumbersUser = [];
let numbersCorrect = [];
let correct = document.getElementById('correct');

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
    hideElements();
    
}, 5000 );

setTimeout( function(){
    functionTime();
    
}, 5100 );


function hideElements(){
     document.getElementById('numbers').innerHTML = '';
    
}

function functionTime(){

    for(let n = 0; n < 5; n++){
        let time = parseInt(prompt('Scrivi il numero, se te lo ricordi ;)'))
        arrayNumbersUser.push(time)    
    }
    document.getElementById('counter').innerHTML = `${arrayNumbersUser}`;
    check();
}

// if (arrayNumbers.value !== arrayNumbersUser.value){
//     document.getElementById('result').innerHTML = "Hai perso";
// } else {
//     document.getElementById('result').innerHTML = "Hai vinto";
// }

function check(){
    for (let x = 0; x < arrayNumbers.length; x++){

        for (let k = 0; k < arrayNumbersUser.length; k++){

         if(arrayNumbers[x] == arrayNumbersUser[k]){

            numbersCorrect.push(arrayNumbersUser[k]);
            console.log(numbersCorrect);

         }

      }

    }

    let controlCorrect = numbersCorrect.length;

    correct.innerHTML = `Hai inserito ${controlCorrect} numeri corretti su 5: ${numbersCorrect}`

}



console.log(arrayNumbers)
console.log(arrayNumbersUser)

