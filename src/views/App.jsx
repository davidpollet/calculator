// IMPORT

import '../global-styles/reset.scss'
import '../global-styles/styles.scss'
import './App.scss'

import Bot from '../components/Bot'
import CalcWrapper from '../components/CalcWrapper'
import Header from '../components/Header'
import React from 'react'

function App () {
  const [result, setResult] = React.useState('')
  const [inputHasFocus, setinputHasFocus] = React.useState(false)

  return (
    <div className={`app-container ${inputHasFocus ? 'input-has-focus' : ''}`}>
      <Header>
        <CalcWrapper
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
