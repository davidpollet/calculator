// IMPORT

import './styles/styles.scss'

import { OPERATORS_REGEX, POWER_REGEX } from '../library/regex/CALC_SIGNS_REGEX'
import React, { useEffect, useMemo, useRef, useState } from 'react'

import Bot from '../components/bot'
import Header from '../components/Header'
import calc from '../utils/calculation/calc'
import convertUnits from '../utils/conversion/convertUnits'
import debounce from 'lodash/debounce'
import formatNumber from '../library/functions/number/formatNumbers'
import isNumber from '../library/functions/number/isNumber'
import parseOperation from '../utils/calculation/parseOperation'
import removeAccent from '../library/functions/string/removeAccent'

function App () {
  const inputRef = useRef()
  const [result, setResult] = useState('')
  const [operation, setOperation] = useState('')
  const [inputRows, setInputRows] = useState(1)
  const [inputHasFocus, setinputHasFocus] = useState(false)

  const handleTextareaChange = e => {
    setOperation(e.target.value.toLowerCase())
  }
  const debounceProcessOperation = useMemo(
    () => debounce(handleTextareaChange, 300),
    [operation]
  )

  const countNewLine = string => {
    return (string && string.match(/\n/g)?.length + 1) || 1
  }

  function handleInputRowsChange (inputValue) {
    const currentInputRowHasChanged = countNewLine(inputValue) !== inputRows
    if (!currentInputRowHasChanged) return false

    setInputRows(countNewLine(inputValue))
  }

  useEffect(() => {
    if (operation?.match(OPERATORS_REGEX) || operation?.match(POWER_REGEX)) {
      const res = calc(parseOperation(operation))
      if (isNumber(res)) setResult(formatNumber(res, 5))
    }

    if (operation.search(/\s(en|in|to)\s/) >= 0) {
      let value = operation.match(/\d*,?\.?\d*\s*?/)[0]
      const conversionWordPosition =
        // Pour echapper le match "in" de l'unité "inch"
        operation.substring(value.length + 1).search(/\s(en|in|to)\s/) +
        value.length +
        1
      let unitSrc = operation.substring(value.length, conversionWordPosition)
      let unitTarget = operation.substring(conversionWordPosition).trim()
      const unitTargetPosition = unitTarget.match(/\s?(en|in|to)\s?/)[0].length
      unitTarget = unitTarget.substring(unitTargetPosition)

      value = parseFloat(value)
      unitSrc = removeAccent(unitSrc)
        .trim()
        .replaceAll('-', ' ')
      unitTarget = removeAccent(unitTarget).replaceAll('-', ' ')

      if (value && unitSrc && unitTarget) {
        setResult(convertUnits(value, unitSrc, unitTarget))
      }
    }

    if (!operation) setResult('')
  }, [operation])

  useEffect(() => {
    return () => {
      debounceProcessOperation.cancel()
    }
  }, [])

  return (
    <>
      <div className={`calculator ${inputHasFocus ? 'input-has-focus' : ''}`}>
        <Header />
        <div className='operation'>
          <textarea
            onChange={debounceProcessOperation}
            onKeyUp={e => {
              if (e.key === 'Enter' || e.key === 'Backspace') {
                handleInputRowsChange(e.target.value)
              }
            }}
            ref={inputRef}
            onFocus={() => setinputHasFocus(true)}
            onBlur={() => setinputHasFocus(false)}
            rows={inputRows}
            className='operation-input'
            autoFocus={true}
          ></textarea>
        </div>
      </div>
      <Bot textContent={result || ''} hasError={!result} />
    </>
  )
}

export default App
