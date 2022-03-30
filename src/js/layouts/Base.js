import React from 'react'
import Navbar from "../components/Navbar"

export default function Base({children,...props}) {
  return (
    <>
        <Navbar {...props} />
        {children}
    </>
  )
}
