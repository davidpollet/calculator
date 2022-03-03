import * as Icons from './Icons'

import React from 'react'
import VisuallyHidden from './VisuallyHidden'
import styles from './MobileKeyboardSwitcher.module.scss'

function MobileKeyboardSwitcher ({ inputMode, setInputMode, inputRef }) {
  const isAndroid = navigator.userAgent.toLowerCase().includes('android')

  async function handleInputModeChange () {
    const newInputMode = inputMode === 'text' ? 'numeric' : 'text'
    if (isAndroid) await setInputMode(newInputMode)
    else setInputMode(newInputMode)
    inputRef.current.focus()
  }

  return (
    <div className={styles['mobile-keyboard-switcher']}>
      <label
        htmlFor='numeric'
        className={`${styles['keyboard-switch']} ${inputMode === 'numeric' &&
          styles['is-selected']}`}
      >
        <VisuallyHidden>Clavier numérique</VisuallyHidden>
        <Icons.Keyboard className={styles.icon} tag='numeric' aria-hidden />
        <input
          type='radio'
          name='inputMode'
          id='numeric'
          onChange={handleInputModeChange}
        />
      </label>
      <label
        htmlFor='text'
        className={`${styles['keyboard-switch']} ${
          inputMode === 'text' ? styles['is-selected'] : ''
        }`}
      >
        <VisuallyHidden>Clavier alphabetique</VisuallyHidden>
        <Icons.Keyboard className={styles.icon} tag='text' aria-hidden />
        <input
          type='radio'
          name='inputMode'
          id='text'
          onChange={handleInputModeChange}
        />
      </label>
    </div>
  )
}

export default MobileKeyboardSwitcher
