import React from 'react'
import styles from './VisuallyHidden.module.scss'

function VisuallyHidden ({ children }) {
  return <div className={styles['sr-only']}>{children}</div>
}

export default VisuallyHidden
