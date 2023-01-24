// IMPORT

import '../global-styles/reset.scss'
import '../global-styles/styles.scss'
import './App.scss'

import Bot from '../components/Bot'
import CalcWrapper from '../components/CalcWrapper'
import Header from '../components/Header'
import React from 'react'
import clsx from 'clsx'

const CalcContext = React.createContext(null)

export function useCalcContext () {
  const { result, setResult } = React.useContext(CalcContext)
  return { result, setResult }
}

function App () {
  const [result, setResult] = React.useState('')
  const [inputHasFocus, setinputHasFocus] = React.useState(false)
  const wrapperClassNames = clsx('app-container', {
    'input-has-focus': inputHasFocus
  })

  return (
    <CalcContext.Provider value={{ result, setResult }}>
      <div className={wrapperClassNames}>
        <Header>
          <CalcWrapper setinputHasFocus={setinputHasFocus} />
        </Header>
        <Bot />
      </div>
    </CalcContext.Provider>
  )
}

export default App
