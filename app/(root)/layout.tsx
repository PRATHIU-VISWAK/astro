import React from 'react'
import { NavbarDemo } from "@/components/Navbar";

const layout = ({ children } : { children: React.ReactNode }) => {
  return (
    <div>
      <NavbarDemo></NavbarDemo>
      {children}     
    </div>
  )
}

export default layout
