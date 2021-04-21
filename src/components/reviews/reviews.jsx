import React, { useEffect, useState } from 'react'
import styles from './reviews.module.scss'
import CONSTANTS from '@/lib/constants'
import { useReviews } from '../../lib/api'

const Reviews = () => {
  const { reviews, isLoading } = useReviews()
  const [currentReview, setCurrentReview] = useState(0)

  useEffect(() => {
    if (!reviews) return

    const interval = setInterval(() => {
      if (reviews.length - 1 > currentReview) {
        setCurrentReview(currentReview + 1)
      } else {
        setCurrentReview(0)
      }
    }, 6000)

    return () => clearInterval(interval)
  }, [reviews, currentReview])

  if (isLoading) return <></>

  return (
    <div className={styles.reviews}>
      <div className={`${styles.content} container`}>
        <h2 className="white center">{CONSTANTS.content.reviews.title}</h2>
        <div className={styles.testimonials}>
          <div className={styles.reviews_list}>
            <p>&quot;{reviews[currentReview].content}&quot;</p>
            <p>- {reviews[currentReview].author}</p>
          </div>
          <ul className={styles.pagination}>
            {reviews.map((item, index) => (
              <li key={item._id}>
                <button
                  className={`${styles.pagination_dot} ${
                    currentReview === index ? styles.active : ''
                  }`}
                  onClick={() => setCurrentReview(index)}
                ></button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Reviews
