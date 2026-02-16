import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
     <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* This is the key: reserve space for content so footer doesn’t jump */}
      <main className="flex-1 relative">
        {children}
      </main>

      <Footer />
    </div>
  )
}

export default Layout
