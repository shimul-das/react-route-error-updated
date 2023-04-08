import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'


import {
createBrowserRouter,
RouterProvider,
} from "react-router-dom";
import { About } from './assets/Component/About/About';
import { Contact } from './assets/Component/Contact/Contact';
import { Header } from './assets/Component/Header/Header';
import Home from './assets/Component/Home/Home';
import Friends from './assets/Component/Friends/Friends';
import { FriendDetail } from './assets/Component/FriendDetail/FriendDetail';
import Posts from './assets/Component/Posts/Posts';
import { PostDetail } from './assets/Component/PostDetail/PostDetail';
//simple route
// const router = createBrowserRouter([
// {
// path: "/",
// element: <div>This is default router</div>,
// },
// {
// path: "/about",
// element:<About></About> ,
// },
// {
// path: "/contact",
// element: <Contact></Contact>,
// },
// ]);

//nested route
const router=createBrowserRouter([
{
path:'/',
element:<Home></Home>,
children:[
{
path:'about',
element:<About></About>
},
{
path:'/friends',
element:<Friends></Friends>,
loader:()=>fetch('https://jsonplaceholder.typicode.com/users')
},
//dnamic route pathe e main path er por clone dile eta dynamic hisabe kaj korbe
{
path:'friend/:friendId',
element:<FriendDetail></FriendDetail>,
loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
},
{
path:'/posts',
element:<Posts></Posts>,
loader:()=>fetch('https://jsonplaceholder.typicode.com/posts')
},
{
  path:'/post:postId',
  element:<PostDetail></PostDetail>,
  loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.postId}`)
  },
{
path:'contact',
element:<Contact></Contact>
}
]
}
])
ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
  <RouterProvider router={router} />
  {/*
  <App /> */}
  {/* <Header></Header> */}