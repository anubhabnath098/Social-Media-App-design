import React from 'react'
import "./Userfriends.css"
export default function Userfriends({user}) {
  return (
    <div>
      <div className="rightbarFollowing">
          <img src={user.profilePicture} alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">{user.username}</span>
        </div>
    </div>
  )
}
