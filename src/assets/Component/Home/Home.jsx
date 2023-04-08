import React from 'react'
import { Outlet, useNavigation } from 'react-router-dom'
import { Header } from '../Header/Header'

//outlet is a specific area in a home page or page outlet help to show sepecific part for all section
const Home = () => {
  const navigation=useNavigation();
  return (
    <div>
        <Header></Header>
        <div>{navigation.state==='loading'?'Loading...':''}</div>
        <h1>This is a  home page</h1>
        <Outlet></Outlet>
    </div>
  )
}

export default Home
