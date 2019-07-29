const Cards = require('./Cards.js');
const FaceValues = require('./FaceValues.js');
const Suits = require('./Suits.js');

/**
 * A CardGenerator is a utility class and contains a function which 
 * generates a deck of 52 poker-style playing cards.
 */
class CardGenerator extends Cards{
  /**
  * This function generates 52 playing cards.
  * @method generatecards
  * @return {Array} Returns an array of 52 cards element;
  */
  generatecards() {
    const cards = [];
    for(let suit in Suits) {
      for(let faceValue in FaceValues) {
        const card = new Cards(suit, faceValue);
        cards.push(card);
      }
    }
    return cards;
  }
}

module.exports = CardGenerator;