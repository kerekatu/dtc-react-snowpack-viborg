import React from 'react'
import Footer from '@/layouts/footer'
import Header from '@/layouts/header'

const Layout = ({ stickyHeader, children }) => {
  return (
    <>
      <Header stickyHeader={stickyHeader} />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
