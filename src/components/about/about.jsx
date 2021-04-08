import React from 'react'
import CONSTANTS from '@/lib/constants'
import styles from './about.module.scss'
import parse from 'html-react-parser'

const About = () => {
  return (
    <section className={styles.about}>
      <div className={`${styles.content} container`}>
        <div className={styles.about_info}>
          <h2>{parse(CONSTANTS.content.about.title)}</h2>
          <div className={styles.about_description}>
            {parse(CONSTANTS.content.about.description)}
          </div>
          <button className="btn_primary">
            {CONSTANTS.content.about.button}
          </button>
        </div>
        <div className={styles.about_examples}>
          {CONSTANTS.content.about.examples.map((item, index) => (
            <div key={index}>
              <img src={item.img} alt={item.title} />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
