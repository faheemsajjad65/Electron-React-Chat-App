import React from 'react'
import Navbar from "../components/Navbar"

// export default function Base({children,...props}) {
//   return (
//     <>
//         <Navbar {...props} />
//         {children}
//     </>
//   )
// }


export const withBaseLayout = (Component, config) => {
  return (props) => {
    const componentName = Component.name;
    return (
      <>
        <Navbar {...config} view={componentName} />
        <Component {...props} />
      </>
    )
  }
}