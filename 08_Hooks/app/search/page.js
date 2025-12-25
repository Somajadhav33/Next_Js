"use client"
import { useSearchParams } from 'next/navigation'
import React from 'react'

const SearchPage = () => {
    const searchParams = useSearchParams()
    console.log(searchParams)
    const query = searchParams.get("name")
  return (
    <div><h1>{query}</h1></div>
  )
}

export default SearchPage