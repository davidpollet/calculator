import * as Icons from './Icons'

import React from 'react'
import styles from './Header.module.scss'

function Header ({ children }) {
  return (
    <header className={`app-header ${styles['app-header']}`}>
      <div className={`row ${styles.row}`}>
        <h1>
          <Icons.Calculator className={styles['app-icon']} />
          Calvin
        </h1>
        <p>Calculez et convertissez des unités comme une recherche Google</p>
      </div>
      {children}
    </header>
  )
}

export default Header
