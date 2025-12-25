"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

const LoginPage = () => {
    const router = useRouter()
    const handleClick = () =>{
        router.push("/products")
        // router.replace("/products")
    }
    const handleBackClick = () =>{
        router.back()
    }
    const handleForward = () =>{
        router.forward()
    }
  return (
    <div className='flex gap-8'>
        <button onClick={handleClick} className='bg-blue-500 p-6'>Go to products page</button>
        <button onClick={handleBackClick} className='bg-red-600 p-6'>Back</button>
        <button onClick={handleForward} className='bg-red-600 p-6'>Forward</button>
    </div>
  )
}

export default LoginPage