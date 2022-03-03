function searchOperatorAndCalc (operator, operationArray) {
  if (operator === '%') {
    if (operationArray.some(i => i.toString().includes('%'))) {
      const percentIndex = operationArray.findIndex(i => i.toString().includes('%'))
      const n = operationArray[percentIndex - 2]
      const percentVal = operationArray[percentIndex].replace('%', '')
      operationArray[percentIndex] = n * (parseFloat(percentVal) / 100)
    }
  }
  while (operationArray.some(n => n === operator)) {
    let result = 0
    const operatorIndex = operationArray.indexOf(operator)
    const numberBefore = operationArray[operatorIndex - 1]
    const numberAfter = operationArray[operatorIndex + 1]
    if (!numberAfter || isNaN(numberAfter)) return ''
    if (operator === '*') result = numberBefore * numberAfter
    if (operator === '+') result = numberBefore + numberAfter
    if (operator === '/') result = numberBefore / numberAfter
    if (operator === '-') result = numberBefore - numberAfter
    operationArray.splice(operatorIndex - 1, 3, result)
  }
}

export default searchOperatorAndCalc
