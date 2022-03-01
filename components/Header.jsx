import * as Icons from './icons'

import React from 'react'
import styles from './Header.module.scss'

function Header () {
  return (
    <header className={styles['app-header']}>
      <div className='row'>
        <h1>
          <Icons.Calculator className={styles['app-icon']} />
          Calvin
        </h1>
        <p>Calculez et convertissez des unités comme une recherche Google</p>
      </div>
    </header>
  )
}

export default Header
