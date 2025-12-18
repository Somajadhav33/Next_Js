import Link from 'next/link'
import React from 'react'

const DashBoard = () => {
  return (
    <div><h1>Welcome to my dashbord</h1>
    <Link href={"/dashboard/section"}>View sections</Link></div>
  )
}

export default DashBoard