import React, { useEffect, useState } from 'react'
import Navbar from '@/components/navbar/navbar'
import { Link } from 'react-router-dom'
import CONSTANTS from '@/lib/constants'

const Header = ({ stickyHeader = false }) => {
  const [headerScroll, setHeaderScroll] = useState(false)
  const [headerPos, setHeaderPos] = useState(0)

  useEffect(() => {
    if (!stickyHeader) return

    function handleHeaderScroll() {
      const currentTopPos = window.scrollY

      setHeaderPos(currentTopPos)
    }

    window.addEventListener('scroll', handleHeaderScroll)

    if (headerPos > 0) {
      setHeaderScroll(true)
    } else {
      setHeaderScroll(false)
    }

    return () => window.removeEventListener('scroll', handleHeaderScroll)
  }, [headerPos, stickyHeader])

  return (
    <header className={headerScroll ? 'scroll' : !stickyHeader ? 'static' : ''}>
      <div className="header_content">
        <Link to="/" className="logo">
          {CONSTANTS.content.company_name}
        </Link>
        <Navbar />
      </div>
    </header>
  )
}

export default Header
