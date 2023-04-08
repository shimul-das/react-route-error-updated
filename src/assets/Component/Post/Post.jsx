import React from 'react'
import './post.css'
import { Link, useNavigate } from 'react-router-dom';

const Post = ({post}) => {
    const {id,title}=post;
    console.log(post)
const navigate=useNavigate();
    const handleNavigation=()=>{
navigate(`/post/${id}`)
    }
  return (
    <div className='post'>
        <h2>ID:{id}</h2>
        <h3>Title:{title}</h3>
        <p> <Link to={`/post/${id}`}>Shome details about me</Link> </p>
        <Link to={`/post/${id}`}><button>Show post details</button></Link>
        <button onClick={handleNavigation}>With button handler</button>
    </div>
  )
}

export default Post