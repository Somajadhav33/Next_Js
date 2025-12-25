"use client"

import { useParams } from 'next/navigation'
import React from 'react'

const SlugComponent = () => {
    const params = useParams();
    console.log(params)
  return (
    <div><h1>Product Id : {params.id}</h1>
    <h1>Product name : {params.slug}</h1>
    </div>
  )
}

export default SlugComponent