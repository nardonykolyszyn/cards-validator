// Import cards validator core
import {
  getCardTypeByValue,
  matchCardLengthWith
} from '../../utils/cardRules';

const TEST_CASES = [
  ["341234567890123", "amex"],
  ["371234567890123", "amex"],
  ["38123456789012", "diners"],
  ["5112345678901245", "mastercard"],
  ["5212345678901245", "mastercard"],
  ["5312345678901245", "mastercard"],
  ["5412345678901245", "mastercard"],
  ["5512345678901245", "mastercard"],
  ["4512345678901", "visa"],
  ["4512345678901345", "visa"],
  ["4512345678901345345", "visa"]
]

describe('Detect card network', () => {
  it('Correctly identifies card networks', () => {
    TEST_CASES.map(card => {
      const cardNetwork = getCardTypeByValue(card[0]);      
      // It matches card networks.
      expect(cardNetwork?.type).toEqual(card[1]);
      // It ensures card length is not higher than edges.
      expect(matchCardLengthWith(card[0], cardNetwork)).toEqual(true);
    })
  });
});
