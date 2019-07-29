const Cards = require('../../main/deckOfCards/Cards.js');

describe('Card Class', () => {
  test('generate Valid card and test all the values', () => {
    const card = new Cards('HEARTS', 'ACE');
    expect(card.name).toBe('ACE of HEARTS');
    expect(card.faceValue).toBe('ACE');
    expect(card.suit).toBe('HEARTS');
    const faceValue = card.getFaceValue();
    const displayName = card.getName();
    const suitValue = card.getSuit();
    expect(displayName).toBe('ACE of HEARTS');
    expect(faceValue).toBe('1');
    expect(suitValue).toBe('HEARTS');
  });

  test('generate invalid card and test all the values', () => {
    const card = new Cards('test', 'test');
    expect(card.name).toBe('test of test');
    expect(card.faceValue).toBe('test');
    expect(card.suit).toBe('test');
    const faceValue = card.getFaceValue();
    const displayName = card.getName();
    const suitValue = card.getSuit();
    expect(displayName).toBe('test of test');
    expect(faceValue).toBeFalsy();
    expect(suitValue).toBeFalsy;
  });
});