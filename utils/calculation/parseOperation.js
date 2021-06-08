import { OPERATORS_REGEX, NEGATIVE_NUMBER_REGEX } from '../../library/regex/CALC_SIGNS_REGEX'

function parseOperation (string) {
  if (string[0] === '-') {
    string = 'minus' + string.substring(1)
  }

  return string
    .replaceAll(' ', '')
    .replaceAll('×', '*')
    .replaceAll('x', '*')
    .replaceAll('÷', '/')
    .replaceAll(':', '/')
    .replaceAll('²', '^2')
    .replaceAll('³', '^3')
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
