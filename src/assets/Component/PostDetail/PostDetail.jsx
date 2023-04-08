import React from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom'

export const PostDetail = () => {
    const postDetail=useLoaderData();
    console.log(postDetail)
    const {id,title,userId,body}=postDetail;
    console.log(postDetail)
const navigate=useNavigate();
    const GoBack=()=>{
navigate(-1)
    }
  return (
    <div>
        <h3>Post detail of :{id}</h3>
        <h5>{title}</h5>
        <p><small>{body}</small></p>
        <button onClick={GoBack}>Go back</button>
    </div>
  )
}
