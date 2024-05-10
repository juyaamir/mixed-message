import quotes from "./quotes.json" with { type: 'json' };

const authorMessage = document.getElementById('message');
const authorName = document.querySelector('#name');
const button = document.querySelector('#button');
button.addEventListener('click', ()=>{
    const p = randomNumber();
    authorMessage.textContent = JSON.stringify(quotes.quotes[p].quote);
    authorName.innerHTML = JSON.stringify(quotes.quotes[p].author);

});


function randomNumber(){
     return Math.floor(Math.random()*102);
} 



