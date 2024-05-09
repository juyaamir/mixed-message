
const message = document.getElementById('message');
const button = document.getElementById('button');


const qoutes = ['long life', 'be smart', 'go ahead ', 'go and get it', 'Sleep good'];
button.addEventListener('click', ()=>{
    const p = randomNumber();

    message.textContent = qoutes[p];

});


function randomNumber(){
     return Math.floor(Math.random()*5);
}


import quotes from "./quotes.json" assert { type: 'json' };
console.log(quotes)
