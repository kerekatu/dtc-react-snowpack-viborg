import React from 'react'
import CONSTANTS from '@/lib/constants'
import styles from './services.module.scss'
import { useServices } from '@/lib/api'

const Services = () => {
  const { services, isLoading } = useServices()

  if (isLoading) return <></>

  console.log(services)

  return (
    <div className={styles.services}>
      <div className={`${styles.content} container`}>
        <h2 className="white center">{CONSTANTS.content.services.title}</h2>
        <p>{CONSTANTS.content.services.description}</p>
        <ul className={styles.services_list}>
          {services.map((item) => (
            <li key={item._id}>
              <img
                src={`/static/images/ydelser/${item.image}`}
                alt={item.title}
              />
              <h3>{item.title}</h3>
              <p>{item.content}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Services
