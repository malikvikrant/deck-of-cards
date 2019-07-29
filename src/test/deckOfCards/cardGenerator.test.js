const CardGenerator = require('../../main/deckOfCards/CardGenerator.js');
jest.mock('../../main/deckOfCards/FaceValues.js', () => {
  return {
    'ACE' : 1,
    'KING': 13
  }
});
jest.mock('../../main/deckOfCards/Suits.js', () => {
  return {
    'HEARTS': 'HEARTS'
  }
});
describe('Card Generator Class', () => {  
  test('generate all the playing cards and test their values , ', () => {
    const cardGenerator = new CardGenerator();
    const cards = cardGenerator.generatecards();
    expect(cards.length).toBe(2);
    expect(cards[0].name).toBe('ACE of HEARTS');
    expect(cards[0].faceValue).toBe('ACE');
    expect(cards[0].suit).toBe('HEARTS');
    expect(cards[1].name).toBe('KING of HEARTS');
    expect(cards[1].faceValue).toBe('KING');
    expect(cards[1].suit).toBe('HEARTS');
  });
});