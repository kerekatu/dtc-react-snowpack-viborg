import React, { useEffect, useState } from 'react'
import { useGallery, useServices } from '@/lib/api'
import CONSTANTS from '@/lib/constants'
import styles from './gallery.module.scss'

const Gallery = () => {
  const { services, isLoading: isLoadingServices } = useServices()
  const { gallery, isLoading: isLoadingGallery } = useGallery()
  const [currentCategory, setCurrentCategory] = useState('Alle')
  const [selectedGalleryItems, setSelectedGalleryItems] = useState([])
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    if (gallery && !isMounted) {
      setSelectedGalleryItems(gallery)
      setIsMounted(true)
    }
  }, [gallery, isMounted])

  if (isLoadingServices && isLoadingGallery) return <></>

  const selectCategory = (category) => {
    setSelectedGalleryItems(
      gallery.filter((item) => category === item.service.title)
    )
    setCurrentCategory(category)
  }

  console.log(gallery)

  return (
    <div className={styles.gallery}>
      <div className={`${styles.content} container`}>
        <h2 className="center">{CONSTANTS.content.gallery.title}</h2>
        <p>{CONSTANTS.content.gallery.description}</p>
        <div className={styles.categories}>
          <button
            className={
              currentCategory === 'Alle' ? 'btn_primary' : 'btn_secondary'
            }
            onClick={() => {
              setSelectedGalleryItems(gallery)
              setCurrentCategory('Alle')
            }}
          >
            Alle
          </button>
          {services.map((item) => (
            <button
              className={
                currentCategory === item.title ? 'btn_primary' : 'btn_secondary'
              }
              key={item._id}
              onClick={() => selectCategory(item.title)}
            >
              {item.title}
            </button>
          ))}
        </div>
        <ul className={styles.gallery_list}>
          {selectedGalleryItems.map((item, index) => (
            <li className={styles.gallery_item} key={item._id}>
              <img
                src={`/static/images/galleri/${item.image}`}
                alt={item.service.title + ' ' + index}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Gallery
