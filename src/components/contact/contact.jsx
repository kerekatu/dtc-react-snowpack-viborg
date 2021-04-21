import React from 'react'
import styles from './contact.module.scss'
import CONSTANTS from '@/lib/constants'

const Contact = () => {
  return (
    <div className={styles.contact}>
      <div className={`${styles.content} container`}>
        <h2 className="center">{CONSTANTS.content.contact.title}</h2>
        <p>{CONSTANTS.content.contact.description}</p>
        <div className={styles.contact_info}>
          {CONSTANTS.content.contact.info.map((info, index) => (
            <div key={index}>
              <h4>{info.title}</h4>
              <ul>
                {info.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <form className={styles.contact_form}>
          <h4>{CONSTANTS.content.contact.form.title}</h4>
          <div>
            <input
              type="text"
              name="navn"
              id="navn"
              placeholder={CONSTANTS.content.contact.form.inputs[0]}
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder={CONSTANTS.content.contact.form.inputs[1]}
            />
          </div>
          <textarea
            name="besked"
            id="besked"
            rows="6"
            placeholder={CONSTANTS.content.contact.form.inputs[2]}
          ></textarea>
          <button className="btn_primary" type="submit">
            {CONSTANTS.content.contact.form.button}
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact
