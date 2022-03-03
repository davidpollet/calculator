import React from 'react'
import styles from './Button.module.scss'

function Button ({ className, children, type, ...remainingProps }) {
  return (
    <button
      className={`${styles.button} ${className}`}
      type={type || 'button'}
      {...remainingProps}
    >
      {children}
    </button>
  )
}

export default Button
