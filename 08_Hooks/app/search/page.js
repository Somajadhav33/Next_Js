"use client"
import { useSearchParams } from 'next/navigation'
import React from 'react'

const SearchPage = () => {
    const searchParams = useSearchParams()
    console.log(searchParams)
    const query = searchParams.get("name")
    const allParams = Array.from(searchParams.entries())
  return (
    <div><h1>{allParams}</h1></div>
  )
}

export default SearchPage