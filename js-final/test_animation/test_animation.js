var cards = document.querySelectorAll('.card');
var shuffle = document.querySelector('.shuffle');

var firstCardPos;
var currCardPos;
var translation;

const timing = {
    duration: 2000,
    iterations: 1,
};

function getFirstCardPos(){
    let firstCard = cards[0];

    let position = firstCard.offsetLeft;
    console.log(position);

    return position;
}

function getCurrCardPos(card){
    let position = card.offsetLeft;
    console.log(position);

    return position;
}

shuffle.addEventListener( 'click' , function(){
    firstCardPos = getFirstCardPos();
    console.log(firstCardPos);

    [...cards].forEach((card=> {
        currCardPos = getCurrCardPos(card);
        card.setAttribute('translation', translation);
        translation = currCardPos-firstCardPos;

        var cardSpread = card.animate([
            { transform: 'translateX(' + ' -' + translation + 'px)', offset: 0.5 },
            { transform: 'translateX(0px)', offset: 1 },],
            timing);

        cardSpread.play();
    }));
});
