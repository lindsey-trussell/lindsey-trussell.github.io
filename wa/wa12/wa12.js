const quoteButton = document.querySelector('#js-new-quote');
const answerButton = document.querySelector('#js-tweet');

quoteButton.addEventListener('click', newQuote);
answerButton.addEventListener('click', getAnswer);

var answerText = document.querySelector('#js-answer-text');
var quoteText = document.querySelector('#js-quote-text');

let answer = '';

async function newQuote(){
    console.log("quote works");
    try{
        const response = await fetch('https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=TYF4V2I58xEFOuhDjf486l7OHsO6ojew');
        const quote = await response.json();

        if(!response.ok){
            throw Error(resonse.statusText);
        }
        console.log(quote);
        displayQuote(quote['question']);
        answer = quote['answer'];

    } catch (err){
        console.log(err);
        alert('nevermind, get fucked');
    }

    answerText.textContent = '';
} 

function displayQuote(quote){
    quoteText.textContent = quote;
}

function getAnswer(){
    answerText.textContent = answer;
}