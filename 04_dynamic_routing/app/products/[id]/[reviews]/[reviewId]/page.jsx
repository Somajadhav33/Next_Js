import React from 'react'

const page = async ({params}) => {
  const {id, reviewId} = await params
  return (
    <div>page {reviewId} {id}</div>
  )
}

export default page