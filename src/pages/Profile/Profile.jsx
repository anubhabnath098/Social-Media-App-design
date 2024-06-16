import React from 'react'
import "./Profile.css"
import Sidebar from "../../components/sidebar/sidebar"
import Rightbar from "../../components/rightbar/rightbar"
import Feed from '../../components/feed/feed'
export default function Profile() {
  return (
    <div>
            <div className="profile">
                <Sidebar/>
                <div className="profileRight">
                    <div className="profileRightTop">
                        <img src="/assets/scenery1.jpg" alt="" className="profileCoverImg" />
                        <div className="profileUserImgContainer">
                            <img src="/assets/dp1.jpg" alt="" className="profileUserImg" />
                        </div>
                        
                    </div>
                    <div className="profileInfo">
                        <h4 className="profileInfoName">James Alexander</h4>
                        <span className="profileInfoDesc">Hello! there.</span>
                    </div>
                    <div className="profileRightBottom">
                        <Feed className="feed"/>
                        <Rightbar profile/>
                    </div>
                </div>
                
            </div>
    </div>
  )
}
