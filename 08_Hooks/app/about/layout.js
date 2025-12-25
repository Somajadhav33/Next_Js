import Navigation from '@/components/Navigation'
import React from 'react'
const AboutLayout = ({children}) => {
  return (
    <div>
         <Navigation/>
        {children}
    </div>
  )
}

export default AboutLayout