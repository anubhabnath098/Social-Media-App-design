import "./rightbar.css"
import React from 'react'
import { Users } from "../../dummyData"
import Online from "../online/Online"
import Userfriends from "../ProfileRightbar/Userfriends"
export default function Rightbar({profile}) {
  const HomeRightBar=()=>{
    return(<><div className="birthdaycontainer">
              <img src="/assets/gift.png" alt="" className="birthdayImg" />
              <span className="birthdayText"><b>Jane Doe</b> and 3 other friends have a birthday today</span>
            </div>
            <img src="/assets/ad.jpg" alt="" className="rightbarAd" />
            <h4 className="rightbarTitle">Online Friends</h4>
            <ul className="rightbarFriendList">
              {Users.map(u=>(
                <Online key={u.id} user={u}/>
              ))}
              </ul>
    </>)
  }

  const ProfileRightBar=()=>{
    return(<>
      <h4 className="rightbarTitle">User Information</h4>
      <div className="rightbarInfo">
        <div className="rightbarbarInfoItem">
          <span className="rightbarInfoKey">City:</span>
          <span className="rightbarInfoValue">New York</span>
        </div>
        <div className="rightbarbarInfoItem">
          <span className="rightbarInfoKey">From:</span>
          <span className="rightbarInfoValue">Madrid</span>
        </div>
        <div className="rightbarbarInfoItem">
          <span className="rightbarInfoKey">Relationship:</span>
          <span className="rightbarInfoValue">Single</span>
        </div>
      </div>
      <h4 className="rightbarTitle">User friends</h4>
      <div className="rightbarFollowings">
        {Users.map(u=>(
          <Userfriends key={u.id} user={u}/>
        ))}
      </div>
    
    </>)
  }
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile?<ProfileRightBar/>:<HomeRightBar/>}
          
      </div>
    </div>
  )
}
