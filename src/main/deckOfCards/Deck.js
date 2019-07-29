/**
 * A Deck is a collection of Cards and provides the ability to shuffle and remove the card.
 */
class Deck {
  constructor(cards) {
    this.cards = cards;
  }
  /**
  * This function shuffles the cards present inside the deck
  * @method shuffle
  * @return {null}
  */
  shuffle() {
    for(let currentIndex = this.cards.length - 1; currentIndex >= 0; currentIndex--){
      let tempVal = this.cards[currentIndex];
      let randomIndex = Math.floor(Math.random() * this.cards.length);
      while(randomIndex === currentIndex) {
        randomIndex = Math.floor(Math.random() * this.cards.length)
      }
      this.cards[currentIndex] = this.cards[randomIndex];
      this.cards[randomIndex] = tempVal;
    }
  }
  /**
  * This function removes the last card from the deck and if there is no card present in deck then returns false
  * @method shuffle
  * @return {String} If cards are present in deck then returns last card from the deck
  * @return {Boolean} If no card is present in the deck or 53rd call is made then returns false
  */
  dealOneCard() {
    return (this.cards.length > 0) ? this.cards.pop() : false;
  }
}

module.exports = Deck;
