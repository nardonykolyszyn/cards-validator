// Import cards validator core
import {
  getCardTypeByValue
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
      expect(getCardTypeByValue(card[0])).toEqual(card[1]);
    })
  });
});
