import React from 'react'
import { useLoaderData } from 'react-router-dom'

export const PostDetail = () => {
    const postDetail=useLoaderData();
  return (
    <div>
        <h1>Post detail of :{postDetail.length}</h1>
    </div>
  )
}
