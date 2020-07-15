export const CARD_TYPES = [
  {
    type: 'amex',
    startPattern: /^(34|37)/,
    maxCardNumberLength: 15
  },
  {
    type: 'diners',
    startPattern: /^(38|39)/,
    maxCardNumberLength: 16
  },
  {
    type: 'visa',
    startPattern: /^4/,
    maxCardNumberLength: 19
  },
  {
    type: 'mastercard',
    startPattern: /^(51|52|53|54|55)/,
    maxCardNumberLength: 14
  }
]

export const getCardTypeByValue = value => {
  return CARD_TYPES.find(cardType => cardType.startPattern.test(value))
}
