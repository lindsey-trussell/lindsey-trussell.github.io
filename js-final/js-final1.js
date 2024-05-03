var suits = ['cups','pentacles','swords','wands','trumpets'];
var minor_names = ['one','two','three','four','five','six','seven','eitght','nine','ten','princess','queen','knight'];
var major_names = ['The Fool', 'The Magician','The Priestess','The Empress','The Emperor','The Hierophant','The Lovers','Adjustment','The Hermit','Fortune','Lust','The Hanged Man','Death','Art','The Tower','The Star','The Moon','The Sun','The Aeon','The Universe'];
var picked = [];
var img_src;

console.log(suits);
console.log(minor_names);
console.log(major_names);

function getRadndomInt(min, max){
    return Math.floor(Math.random()*(max-min+1))+min;
};

function getCardName(suit, card_no){
    var name = minor_names[card_no-1];
    if(suit === 'trumps'){
        name = major_names[card_no];
    }
};

function drawCards(){

}

function flipCard(){
    var cards = document.querySelectorAll('.card');

    [...cards].forEach((card)=>{
        card.addEventListener( 'click', function() {
        card.classList.toggle('is-flipped');
    });
    });
}