import React from 'react'
import styles from './navbar.module.scss'
import CONSTANTS from '@/lib/constants'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul>
        {CONSTANTS.content.navigation.map((item, index) => (
          <li key={index}>
            <a href={item.link}>{item.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
