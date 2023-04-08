import React from 'react'
import { useLoaderData } from 'react-router-dom'

export const FriendDetail = () => {
  const friend=useLoaderData();
  return (
    <div>
        <h3>Every thing for this persion</h3>
        <h4>Name:{friend.name}</h4>
        <h4>Phone:{friend.phone}</h4>
    </div>
  )
}
