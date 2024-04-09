const quoteButton = document.querySelector('#js-new-quote');
const answerButton = document.querySelector('#js-tweet');

quoteButton.addEventListener('click', newQuote);
answerButton.addEventListener('click', newAnswer);

var answerText = document.querySelector('#js-answer-text');
var quoteText = document.querySelector('#js-quote-text');

async function newQuote(){
    console.log("i work");
    try{
        const response = await fetch('https://trivia.cyberwisp.com/getrandomchristmasquestion');
        const quote = await response.json();

        if(!response.ok){
            throw Error(resonse.statusText);
        }
        console.log(quote);
        displayQuote(quote['question']);

    } catch (err){
        console.log(err);
        alert('nevermind, get fucked');
    }

    answerText.textContent = '';
} 

function displayQuote(quote){
    quoteText.textContent = quote;
}

async function newAnswer(){
    console.log("i work");
    try{
        const response = await fetch('https://trivia.cyberwisp.com/getrandomchristmasquestion');
        const answer = await response.json();
        if(!response.ok){
            throw Error(resonse.statusText);
        }

        console.log(answer);
        displayAnswer(answer['answer']);

    } catch (err){
        console.log(err);
        alert('nevermind, get fucked');
    }
} 

function displayAnswer(answer){
    answerText.textContent = answer;
}