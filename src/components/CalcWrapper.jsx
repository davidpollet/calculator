import * as Icons from './Icons'

import React, { useCallback, useEffect, useState } from 'react'

import CONVERSION_WORD from '../utils/constants/CONVERTION_WORDS_REGEX'
import MobileKeyboardSwitcher from './MobileKeyboardSwitcher'
import OPERATORS_REGEX from '../utils/constants/OPERATORS_REGEX'
import POWER_REGEX from '../utils/constants/POWER_SIGNS_REGEX'
import VisuallyHidden from './VisuallyHidden'
import calc from '../utils/helpers/calc'
import convertUnits from '../utils/helpers/convertUnits'
import debounce from 'lodash/debounce'
import formatNumbers from '../utils/helpers/formatNumbers'
import getConvertionElements from '../utils/helpers/formatConvertion'
import isNumber from '../utils/helpers/isNumber'
import isTouchScreen from '../utils/helpers/isTouchScreen'
import normalizeLetters from '../utils/helpers/normalizeLetters'
import parseOperation from '../utils/helpers/parseOperation'
import styles from './CalcWrapper.module.scss'

function CalcWrapper ({ inputRef, setResult, setinputHasFocus }) {
  const [operation, setOperation] = useState('')
  const [inputMode, setInputMode] = useState('numeric')

  const handleCalcInputChange = e => {
    setOperation(e.target.value.toLowerCase())
  }

  const debounceProcessOperation = useCallback(
    () => debounce(handleCalcInputChange, 300),
    []
  )

  function handleInputHeightChange (inputValue) {
    const hasScroll =
      inputRef.current.scrollHeight > inputRef.current.clientHeight
    const inputscrollHeight = inputRef.current.scrollHeight
    const setInputHeight = value =>
      inputRef.current.style.setProperty('--scroll-height', value || '')
    const setRadius = value =>
      inputRef.current.parentElement.style.setProperty('--radius', value || '')

    if (!inputValue) {
      setRadius('')
      setInputHeight('')
      return
    }

    if (!hasScroll) return false
    if (inputscrollHeight > inputRef.current.clientHeight) setRadius('8px')

    setInputHeight(`${inputRef.current.scrollHeight - 32}px`)
  }

  useEffect(() => {
    if (!operation) {
      setResult('')
      return
    }

    let answer
    let operationCopy = operation

    const hasMathQuery =
      OPERATORS_REGEX.test(operation) || POWER_REGEX.test(operation)
    const hasConvertionQuery = CONVERSION_WORD.test(operation)
    const userWantToClear = normalizeLetters(operation).includes('efface')

    if (userWantToClear) {
      setResult('')
      setOperation('')
      inputRef.current.value = ''
      return false
    }

    if (hasMathQuery) {
      answer = calc(parseOperation(operation))
      if (!isNumber(answer)) return setResult('error')
      setResult(formatNumbers(answer, 5))
    }

    if (hasConvertionQuery) {
      if (answer) {
        const firstLetterIndex = operation.search(/\s?[a-z]/)
        operationCopy = `${answer}${operation.slice(firstLetterIndex)}`
      }

      const { valueToConvert, unitSrc, unitTarget } =
        getConvertionElements(operationCopy)

      if (valueToConvert && unitSrc && unitTarget) {
        setResult(convertUnits(valueToConvert, unitSrc, unitTarget))
      }
    }
  }, [operation, inputRef, setResult])

  useEffect(() => {
    return () => {
      debounceProcessOperation.cancel()
    }
  }, [debounceProcessOperation])

  return (
    <div
      className={`${styles['calc-input-wrapper']} ${
        isTouchScreen ? styles['is-touch-screen'] : ''
      }`}
    >
      <VisuallyHidden>
        <label htmlFor='operation'>Opération ou Convertion d'unité</label>
      </VisuallyHidden>
      <textarea
        onChange={e => {
          debounceProcessOperation(e)
          handleInputHeightChange(e.currentTarget.value)
        }}
        id='operation'
        aria-label='Votre opération ou conversion'
        ref={inputRef}
        onFocus={() => setinputHasFocus(true)}
        onBlur={() => setinputHasFocus(false)}
        inputMode={inputMode}
        className={styles['calc-input']}
        placeholder='ex: 580 - 32% ou 55 inch en cm'
        autoFocus
      ></textarea>

      <button
        type='button'
        className={`${styles['clear-input']}`}
        hidden={!operation}
        onClick={e => {
          setOperation('')
          inputRef.current.value = ''
          handleInputHeightChange('')
          inputRef.current.focus()
          e.currentTarget.style.pointerEvents = ''
        }}
      >
        <Icons.Close />
      </button>

      {isTouchScreen && (
        <MobileKeyboardSwitcher
          inputMode={inputMode}
          setInputMode={setInputMode}
          inputRef={inputRef}
        />
      )}
    </div>
  )
}

export default CalcWrapper
