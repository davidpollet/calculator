import React from 'react'
import styles from './ScreenReaderOnly.module.scss'

function ScreenReaderOnly ({ children }) {
  return <div className={styles['sr-only']}>{children}</div>
}

export default ScreenReaderOnly
