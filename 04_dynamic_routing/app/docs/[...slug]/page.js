import React from 'react'

const Page = async ({ params }) => {
  const slug = await params;
  return (
    <div><p>{slug.slug?.join('/')}</p></div>
  )
}

export default Page