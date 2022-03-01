import React from 'react'
import clsx from 'clsx'
import styles from './bot.module.scss'

function Bot (props) {
  const { textContent } = props || ''
  const classNames = clsx([
    styles.bot,
    textContent === 'error' && styles.error,
    !!textContent && styles['has-result']
  ])
  return (
    <div className={classNames}>
      <div className={styles['bot-top']}>
        <img
          className={`${styles['bot-head']}`}
          src='/medias/img/head-left.png'
          alt=''
        />
        <p className={styles.result}>
          <span>{textContent || '︶'}</span>
        </p>
        <img
          className={`${styles['bot-head']}`}
          src='/medias/img/head-right.png'
          alt=''
        />
      </div>
      <div className={styles['bot-bottom']}>
        <img
          className={`${styles['bot-body']}`}
          src='/medias/img/body.png'
          alt=''
        />
      </div>
    </div>
  )
}

export default Bot
