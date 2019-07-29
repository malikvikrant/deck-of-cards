const FaceValues = require('./FaceValues.js');
const Suits = require('./Suits.js');

/**
 * A Card which is present in a deck of poker-style playing cards.
 * In this class we are setting and getting the name, suit and faceValue of the card
 */
class Card {
  constructor(suit, faceValue) {
    this.name = `${faceValue} of ${suit}`;
    this.suit = suit;
    this.faceValue = faceValue;
  }

  /**
  * This function returns the suit of the card
  * @method getSuit
  * @return {String} Returns suit of the card
  */
  getSuit() {
    return Suits[this.suit];
  }

  /**
  * This function returns the value of the card associated with facevalue of the card
  * @method getFaceValue
  * @return {String} Returns value of the card
  */
  getFaceValue() {
    return FaceValues[this.faceValue];
  }

  /**
  * This function returns the display name of the card
  * @method getName
  * @return {String} Returns display name of the card
  */
  getName() {
    return this.name;
  }
}

module.exports = Card;
