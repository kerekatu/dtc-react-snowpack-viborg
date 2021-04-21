import React from 'react'
import styles from './hero.module.scss'
import CONSTANTS from '@/lib/constants'

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={`${styles.content} container`}>
        <h1>{CONSTANTS.content.hero.title}</h1>
        <div className={styles.description}>
          {CONSTANTS.content.hero.description}
        </div>
        <button className="btn_primary">{CONSTANTS.content.hero.button}</button>
      </div>
    </div>
  )
}

export default Hero
