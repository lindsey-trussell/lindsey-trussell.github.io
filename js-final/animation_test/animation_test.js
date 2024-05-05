// intialize the selected card as false
let selectedCard = false;
// find all the cards
let cards = document.querySelectorAll('.flex-item');
console.log(cards);
// grab the button
let button = document.querySelector('button')
// initialize the first card position
let firstCardPosition = '';
// intialize the selected card position
let selectedCardPosition = '';
// 
let isAnimating = false;

// Get the selected card position
function getSelectedCardPosition(card) {
  selectedCardPosition = card.getBoundingClientRect();
  console.log(selectedCardPosition);
};

// Get the first card position
function getFirstCardPosition(cards) {
  if (cards) {
    firstCardPosition = cards[0].getBoundingClientRect();    
  }
};

// Remove the cards from the DOM
function hideCards(card, interval) {
  isAnimating = true;
  setTimeout(function() {
    isAnimating = false;
    card.style.display = 'none';
  }, interval)
};

// Add the cards back to the DOM
function showCards(card, interval) {
  isAnimating = true;
  setTimeout(function() {
    isAnimating = false;
    card.style.display = 'block';
  }, interval)
};

// Add the class of card-hide to set the opacity to 0.
// Then if the cards aren't the selected card, remove them from the DOM as well. 
function fadeCards(cards) {
  cards.forEach((card) => { 
    if (!card.selectedCard) {
      card.classList.add('card-hide');
      hideCards(card, 250);
    }
  });
};
// Remove the class of card-hide, then 
// Then if the cards aren't the selected card, add them back to the DOM.
function revealCards(cards) {
  cards.forEach((card) => {
    if (!card.selectedCard) {
      card.classList.remove('card-hide');
      showCards(card, 250);
    }
  })
}

// Go through each card
// Add an attribute 'selectedCard'
// On first click, it is selected. We toggle it based on click
// If 'selectedCard' is true, than display the selected div - otherwise
// hide the div. 
cards.forEach(function(card) {
  
  // initialize the value to false
  card.selectedCard = false;
  
  // Grab the div that is the selected div.
  let showSelected = card.firstElementChild;
  
  // on click, do the things below. 
  card.addEventListener('click', function() {
    // if animating, get out of this function so no jankiness occurs
    if (isAnimating){
      return
    }
    // Toggle the value of the selected card
    card.selectedCard = !card.selectedCard;
    card.selectedCard ? showSelected.style.display = 'block' : showSelected.style.display = 'none';
    if (card.selectedCard) {
      getSelectedCardPosition(card);
      getFirstCardPosition(cards) 
    }
   // Modifications to the method to add the animation onclick 
    if (card.selectedCard) { 
      card.style.position = 'absolute';
      // subtract 32px for padding
      card.style.top = selectedCardPosition.y - 32 + 'px'; 
      card.style.left = selectedCardPosition.x - 32 + 'px';
      
      setTimeout(function () {
        card.style.top = firstCardPosition.y - 32 + 'px';
        card.style.left = firstCardPosition.x - 32 + 'px';
      }, 250);
      
    } else {
      card.style.top = selectedCardPosition.y - 32 + 'px'; 
      card.style.left = selectedCardPosition.x - 32 + 'px';
    }

    if (card.selectedCard) {
      fadeCards(cards);
    } else {
      setTimeout(() => {
        card.style.position = 'relative';
        card.style.left = 'auto';
        card.style.top = 'auto';
      }, 250)
      revealCards(cards);
    }
  });

});