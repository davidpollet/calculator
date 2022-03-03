import NEGATIVE_NUMBER_REGEX from '../constants/NEGATIVE_NUMBER_REGEX'
import OPERATORS_REGEX from '../constants/OPERATORS_REGEX'

function parseOperation (string) {
  if (string[0] === '-') {
    string = 'minus' + string.substring(1)
  }

  return string
    .replaceAll(' ', '')
    .replaceAll(',', '.')
    .replaceAll(/x|×/gi, '*')
    .replaceAll(/:|÷/gi, '/')
    .replaceAll('²', '^2')
    .replaceAll('³', '^3')
    .replaceAll('pourcent', '%')
    .replaceAll('pourcents', '%')
    .replaceAll(/\*\*/g, '^')
    .replaceAll(/\^-/g, '^minus')
    .replaceAll(/\(-/g, '$&minus')
    .replaceAll(NEGATIVE_NUMBER_REGEX, '$&minus')
    .replaceAll('-minus', 'minus')
    .replaceAll(OPERATORS_REGEX, '|$&|')
    .replaceAll('minus', '-')
    .replaceAll('(', '|(|')
    .replaceAll(')', '|)|')
    .split('|')
    .filter(i => i !== '')
}

export default parseOperation
