import * as Icons from './Icons'

import Button from './Button'
import React from 'react'
import clsx from 'clsx'
import copyToClipboard from '../utils/helpers/copyToClipboard'
import styles from './Bot.module.scss'
import { useCalcContext } from '../views/App'

function Bot () {
  const [clipboardUsed, setClipboardUsed] = React.useState(false)
  const resultMemo = React.useRef()
  const { result, setResult } = useCalcContext()

  const botClassNames = clsx([
    'bot',
    styles.bot,
    result === 'error' && styles.error,
    !!result && styles['has-result']
  ])

  function handleClipboardCopyClick () {
    resultMemo.current = result
    setClipboardUsed(true)
    copyToClipboard(result)
  }

  React.useEffect(() => {
    let timer
    if (!result) {
      setClipboardUsed(false)
      return timer && clearTimeout(timer)
    }
    if (clipboardUsed) {
      setResult('Copié')
      timer = setTimeout(() => {
        setResult(resultMemo.current)
        setClipboardUsed(false)
      }, 2000)
    }
    return () => {
      clearTimeout(timer)
    }
  }, [result, clipboardUsed, setResult])

  return (
    <div className={botClassNames}>
      <div className={styles['bot-top']}>
        <img
          className={`${styles['bot-head']}`}
          src='/medias/img/head-left.png'
          alt=''
          aria-hidden
        />
        <p className={styles.result}>
          <span>{result || '︶'}</span>
        </p>
        <Button
          className={`${styles.button}`}
          onClick={handleClipboardCopyClick}
          disabled={!result}
          aria-label='Copié le resultat dans le presse-papier'
        >
          <Icons.Clipboard aria-hidden />
        </Button>
        <img
          className={`${styles['bot-head']}`}
          src='/medias/img/head-right.png'
          alt=''
          aria-hidden
        />
      </div>
      <div className={styles['bot-bottom']}>
        <img
          className={`${styles['bot-body']}`}
          src='/medias/img/body.png'
          alt=''
          aria-hidden
        />
      </div>
    </div>
  )
}

export default Bot
