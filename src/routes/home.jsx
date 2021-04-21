import React, { useRef } from 'react'
import Hero from '@/components/hero/hero'
import About from '@/components/about/about'
import Services from '@/components/services/services'
import Reviews from '@/components/reviews/reviews'
import Gallery from '@/components/gallery/gallery'
import Contact from '@/components/contact/contact'
import Layout from '@/layouts/layout'

const HomePage = () => {
  const heroRef = useRef(null)
  const aboutRef = useRef(null)
  const servicesRef = useRef(null)
  const reviewsRef = useRef(null)
  const galleryRef = useRef(null)
  const contactRef = useRef(null)

  return (
    <Layout stickyHeader>
      <section id="hero" ref={heroRef}>
        <Hero />
      </section>
      <section id="about" ref={aboutRef}>
        <About />
      </section>
      <section id="services" ref={servicesRef}>
        <Services />
      </section>
      <section id="gallery" ref={galleryRef}>
        <Gallery />
      </section>
      <section id="reviews" ref={reviewsRef}>
        <Reviews />
      </section>
      <section id="contact" ref={contactRef}>
        <Contact />
      </section>
    </Layout>
  )
}

export default HomePage
