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
boxWrapper.className = ('d-flex justify-content-center align-items-center gap-2 flex-wrap text-white');
        // console.log(boxWrapper)

// aggiungo l'id e il box al div
boxWrapper.setAttribute ('id','boxes')
        console.log(boxWrapper);

// dichiaro la variabile per i numeri/parole
let numBox = 100;
let tempHtml='';
//console-console.log(numBox);


/*     aggiungo le condizioni con For  */

for(let number = 1 ; number <= numBox ; number++){
    let result;
    let color;
    if (number % 3 === 0 &&  number % 5 === 0){
        result = 'fizzBuzz';
        color = 'fizz-buzz';
        console.log(result);
    } else if (number % 3 === 0){
        result = 'fizz';
        color ='fizz';
        console.log (result);
    } else if ( number % 5 === 0){
        result = 'buzz';
        color = 'buzz';
        console.log(result);
    } else {
        result= number;
        console.log(result);
    } 
    tempHtml += `<div class="box ${color}"> ${result}</div>`;
    console.log(tempHtml)
    }
    
boxWrapper.innerHTML = tempHtml;

// stampo nella pagina
const container = document.querySelector('.container');
container.append (boxWrapper);

