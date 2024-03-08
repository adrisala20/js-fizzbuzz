/*
Scrivi un programma che stampi in console i numeri da 1 a 100,
ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
*/
 /* template 
 <div id="boxes class="d-flex justify-content-center gap-2">
            <div class="box"></div>
        </div> 
 */

// creo il contenitore nel dom usando createElemene() 
const boxWrapper = document.createElement('div');
        // console.log(boxWrapper);

//aggiungo gli attributi (className)
boxWrapper.className = ('d-flex justify-content-center align-content-center gap-2');
        // console.log(boxWrapper)

// aggiungo l'id e il box al div
boxWrapper.setAttribute ('id','boxes')
        console.log(boxWrapper);

// dichiaro la variabile per i numeri/parole
let numBox = 100;
//console-console.log(numBox);


//aggiungo la condizione con for per il ciclo
for(let i = (1 % 3 === 0 ) && (1 % 5 === 0) ; i <=numBox ; ((i = i + 3) && (i = i + 5)){


});