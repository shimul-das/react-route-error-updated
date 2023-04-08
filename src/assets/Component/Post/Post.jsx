import React from 'react'
import './post.css'
import { Link } from 'react-router-dom';

const Post = ({post}) => {
    const {id,title}=post;
    console.log(post)
  return (
    <div className='post'>
        <h2>ID:{id}</h2>
        <h3>Title:{title}</h3>
        <p> <Link to={`/post/${id}`}>Shome details about me</Link> </p>
        <Link to={`/post/${id}`}><button>Show post details</button></Link>
    </div>
  )
}

export default Post