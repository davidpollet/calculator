import calc from './calc'

function calcParenthesis (arr) {
  while (
    arr.some(n => n === '(') &&
      arr.some(n => n === ')')
  ) {
    let openingIndex = arr.indexOf('(')
    const closingIndex = arr.indexOf(')')
    let difference = closingIndex - openingIndex + 1
    let operation = arr.slice(openingIndex + 1, closingIndex)
    while (operation.some(n => n === '(')) {
      const innerParIndex = operation.indexOf('(')
      operation = operation.slice(operation.indexOf('(') + 1)
      openingIndex = openingIndex + innerParIndex + 1
      difference = operation.length + 2
    }
    arr.splice(openingIndex, difference, calc(operation))
  }
}

export default calcParenthesis
