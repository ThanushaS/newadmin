import React from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
const Layout = ({children}) => {
  return (
    <>
      <Navbar/>
      {children}
    
    </>
  )
}

export default Layout

