// IMPORT

import '../global-styles/reset.scss'
import '../global-styles/styles.scss'
import './App.scss'

import React, { useRef, useState } from 'react'

import Bot from '../components/Bot'
import CalcWrapper from '../components/CalcWrapper'
import Header from '../components/Header'

function App () {
  const inputRef = useRef()
  const [result, setResult] = useState('')
  const [inputHasFocus, setinputHasFocus] = useState(false)

  return (
    <div className={`app-container ${inputHasFocus ? 'input-has-focus' : ''}`}>
      <Header>
        <CalcWrapper
          inputRef={inputRef}
          result={result}
          setResult={setResult}
          setinputHasFocus={setinputHasFocus}
        />
      </Header>

      <Bot result={result || ''} setResult={setResult} />
    </div>
  )
}

export default App
