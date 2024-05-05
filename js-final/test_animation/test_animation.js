var cards = document.querySelectorAll('card');
var cardContainer = document.querySelector('.shuffled-cards');
var shuffle = document.querySelector('shuffle');

var firstCardPos;
var currCardPos;
var translation;
var cardsFinalPos = [];

const timing = {
    duration: 2000,
    iterations: 1,
};

var cardTranslate = [
    { transform : 'translateX('+ translation + ')'},
];

shuffle.addEventListener( 'click' , function(){
    firstCardPos = shuffle.firstChild.x;
    console.log(firstCardPos);

    [...cards].forEach((card=> {
        currCardPos = card.x;
        translation = currCardPos-firstCardPos;

        card.animate([{transform: 'translate(' + translation + ')'},],{timing,});
    }));
});
