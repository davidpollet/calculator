import * as Icons from '../components/icons'

import React from 'react'

function Header () {
  return (
    <header>
      <div className='row'>
        <h1>
          <Icons.Calculator />
          Calvin
        </h1>
        <p>Calculez et convertissez des unités comme une recherche Google</p>
      </div>
    </header>
  )
}

export default Header
