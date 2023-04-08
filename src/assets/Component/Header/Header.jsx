import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './header.css'
import ActiveLink from '../ActiveLink/ActiveLink'
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
    <ActiveLink to="/about">About</ActiveLink>
    <ActiveLink to="/contact">Contact</ActiveLink>
    <Link to="/friends">friends</Link>
    <Link to="/posts">posts</Link>
</nav>
)
}