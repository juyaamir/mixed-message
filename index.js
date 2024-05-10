import quotes from "./quotes.json" with { type: 'json' };

console.log(quotes.quotes[2])

const message = document.getElementById('message');
const button = document.querySelector('#button');

button.addEventListener('click', ()=>{
    const p = randomNumber();
    message.innerHTML = JSON.stringify(quotes.quotes[p].quote);
    message.innerHTML += JSON.stringify(quotes.quotes[p].author);

});


function randomNumber(){
     return Math.floor(Math.random()*102);
} 



