import React from 'react'
import "./closeFriends.css"
export default function Closefriends({user}) {
  return (
    <div>
        <li className="sidebarFriend">
                <img src={user.profilePicture} alt="" className="sidebarFriendImg" />
                <span className="sidebarFriendName">{user.username}</span>
        </li>
    </div>
  )
}
