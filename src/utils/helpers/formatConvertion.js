import normalizeLetters from './removeAccent'

function getConvertionElements (operation) {
  let [valueToConvert] = operation.match(/\d*,?\.?\d*\s*?/)
  const conversionWordPosition =
    // Pour echapper le match "in" de l'unité "inch"
    operation
      .substring(valueToConvert.length + 1)
      .search(/\s(en|in|to)\s/) +
    valueToConvert.length +
    1
  let unitSrc = operation.substring(
    valueToConvert.length,
    conversionWordPosition
  )
  let unitTarget = operation.substring(conversionWordPosition).trim()
  const unitTargetPosition = unitTarget.match(/\s?(en|in|to)\s?/)[0].length
  unitTarget = unitTarget.substring(unitTargetPosition)

  valueToConvert = parseFloat(valueToConvert)
  unitSrc = normalizeLetters(unitSrc)
    .trim()
    .replaceAll('-', ' ')
  unitTarget = normalizeLetters(unitTarget).replaceAll('-', ' ')

  return { valueToConvert, unitSrc, unitTarget }
}

export default getConvertionElements
