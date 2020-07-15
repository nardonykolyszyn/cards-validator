export const CARD_TYPES = [
  {
    type: 'amex',
    startPattern: /^(34|37)/,
    maxCardNumberLength: [15]
  },
  {
    type: 'diners',
    startPattern: /^(38|39)/,
    maxCardNumberLength: [14]
  },
  {
    type: 'visa',
    startPattern: /^4/,
    maxCardNumberLength: [13,16,19]
  },
  {
    type: 'mastercard',
    startPattern: /^(51|52|53|54|55)/,
    maxCardNumberLength: [16]
  }
]

export const getCardTypeByValue = value => {
  return CARD_TYPES.find(cardType => cardType.startPattern.test(value))
}

export const matchCardLengthWith = (value, network) => {
  return network.maxCardNumberLength.some(length => length >= value.length)
}
