import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

  const NotFoundPage = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
        <Image src={"/not-found.svg"} alt="not-found" height={400} width={400}/>
        <p>Not Found</p>
        <Link href={"/"}>Back To home</Link>
    </div>
  )
}

export default NotFoundPage