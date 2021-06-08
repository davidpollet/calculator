import calcParenthesis from './calcParenthesis'
import searchOperatorAndCalc from './searchOperatorAndCalc'

function calc (operation) {
  const parsedOperation = operation.map(n => {
    if (typeof n === 'string' && n.includes('^')) {
      const value = parseFloat(n.match(/-?\d*.?,?\d*/)[0])
      const power = parseInt(n.replace('minus', '-').split('^')[1])
      return power !== 0 && Math.pow(value, power)
    }
    if (typeof n === 'string' && n.includes('minus')) {
      return parseFloat(n.replace('minus', '-'))
    }
    if (typeof n === 'string' && n.includes('%')) return n
    if (parseFloat(n)) return parseFloat(n)
    return n
  })

  calcParenthesis(parsedOperation)
  searchOperatorAndCalc('%', parsedOperation)
  searchOperatorAndCalc('/', parsedOperation)
  searchOperatorAndCalc('*', parsedOperation)
  searchOperatorAndCalc('-', parsedOperation)
  searchOperatorAndCalc('+', parsedOperation)

  return parsedOperation[0] || ''
}

export default calc
