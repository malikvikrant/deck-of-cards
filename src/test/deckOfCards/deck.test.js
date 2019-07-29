const Deck = require('../../main/deckOfCards/Deck.js');
const CardGenerator = require('../../main/deckOfCards/CardGenerator.js');

describe('Deck Class', () => {  
  test('initialize deck with 2 cards and check value of each ', () => {
    const cardGenerator = new CardGenerator();
    const cards = cardGenerator.generatecards();
    const deck = new Deck(cards);
    expect(deck.cards.length).toBe(52);
    expect(deck.cards[0].name).toBe('ACE of HEARTS');
    expect(deck.cards[0].faceValue).toBe('ACE');
    expect(deck.cards[0].suit).toBe('HEARTS');
    expect(deck.cards[1].name).toBe('TWO of HEARTS');
    expect(deck.cards[1].faceValue).toBe('TWO');
    expect(deck.cards[1].suit).toBe('HEARTS');
  });

  describe('shuffle method', () => {  
    test('shuffle the card and check if the order is different from original order', () => {
      const cardGenerator = new CardGenerator();
      const originalOrder = cardGenerator.generatecards();
      const cards = cardGenerator.generatecards();
      const deck = new Deck(cards);
      deck.shuffle();
      let cardNotInOrder = false;
      for(let idx in deck.cards) {
        if(originalOrder[idx].name !== deck.cards[idx].name) {
          cardNotInOrder = true;
        }
      }
      expect(cardNotInOrder).toBeTruthy();
    });
  });

  describe('dealOneCard method', () => {  
    test('deal one card and check if the card has been removed from deck or not', () => {
      const cardGenerator = new CardGenerator();
      const cards = cardGenerator.generatecards();
      const deck = new Deck(cards);
      deck.dealOneCard();
      expect(deck.cards.length).toBe(51);
    });
    test('no card should be dealt if caller make the 53rd deal', () => {
      const cardGenerator = new CardGenerator();
      const cards = cardGenerator.generatecards();
      const deck = new Deck(cards);
      expect(deck.cards.length).toBe(52);
      while(deck.cards.length > 0) {
        expect(deck.dealOneCard()).toBeTruthy();
      }
      expect(deck.dealOneCard()).toBeFalsy();
    });
  });
});