import * as converter from 'units-converter'

import UNITS from '../constants/units-dictionary'
import formatNumber from './formatNumbers'

function convertUnits (value, sourceReq, targetReq, type, lang = 'fr') {
  let unitType = type || null
  let source
  let target

  if (unitType === 'time') {
    for (const unit in UNITS.time) {
      let isMatching = UNITS[type][unit].some(
        e => e.toLowerCase() === sourceReq
      )
      if (isMatching) source = unit

      isMatching = UNITS[type][unit].some(
        e => e.toLowerCase() === targetReq
      )
      if (isMatching) target = unit

      if (source && target) break
    }
  }

  if (!unitType) {
    for (const type in UNITS) {
      for (const unit in UNITS[type]) {
        let isMatching = UNITS[type][unit].some(
          e => e.toLowerCase() === sourceReq
        )
        if (isMatching) {
          unitType = type
          source = unit
        }

        isMatching = UNITS[type][unit].some(
          e => e.toLowerCase() === targetReq
        )
        if (isMatching) target = unit

        if (unitType && source && target) break
      }
      if (unitType && source && target) break
    }
  }

  if (!unitType || !source || !target) return 'error'

  let canConvert = Object.keys(UNITS[unitType])
  canConvert = canConvert.some(k => k === source) &&
    canConvert.some(k => k === target)

  if (canConvert) {
    targetReq = UNITS[unitType][target][0]

    if (unitType === 'time') {
      const conversionResult = converter
        .time(value)
        .from(source)
        .to(target)
        .value

      if (
        (source === 's' && target === 'min') ||
        (source === 's' && target === 'h') ||
        (source === 'min' && target === 's') ||
        (source === 'min' && target === 'h') ||
        (source === 'h' && target === 's') ||
        (source === 'h' && target === 'min')
      ) {
        const resultArray = conversionResult
          .toString()
          .split('.')
          .map(n => parseFloat(n))
        const [unit] = resultArray
        let decimal = (conversionResult - unit) * (60 / 100)
        decimal = decimal && decimal.toFixed(2).toString().substr(2)
        const convertedTime =
          Intl.NumberFormat().format(unit) +
          `${decimal ? `${targetReq + decimal}` : targetReq}`

        return (
          convertedTime !== '0,00'
            ? `${convertedTime}`
            : `${formatNumber(conversionResult)} ${targetReq}`
        )
      }
    }

    const conversionResult =
      converter[unitType](value).from(source).to(target).value

    return (
      conversionResult >= 1
        ? `${formatNumber(conversionResult, 2)} ${targetReq}`
        : `${formatNumber(conversionResult, 5)} ${targetReq}`
    )
  } else {
    return 'error'
  }
}

export default convertUnits
