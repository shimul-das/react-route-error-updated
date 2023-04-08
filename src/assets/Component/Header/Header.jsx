import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'
export const Header = () => {
return (
// <div>
    // <a href="/">Home</a>
    // <a href="/about">About</a>
    // <a href="/contact">Contact</a>
    // </div>
    //use to to remove load
<nav>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/contact">Contact</Link>
    <Link to="/friends">friends</Link>
    <Link to="/posts">posts</Link>
</nav>
)
}