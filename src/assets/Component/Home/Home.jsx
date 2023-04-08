import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../Header/Header'

//outlet is a specific area in a home page or page outlet help to show sepecific part for all section
const Home = () => {
  return (
    <div>
        <Header></Header>
        <h1>This is a  home page</h1>
        <Outlet></Outlet>
    </div>
  )
}

export default Home
