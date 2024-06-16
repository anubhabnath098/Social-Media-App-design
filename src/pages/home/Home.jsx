import React from 'react'
import Sidebar from "../../components/sidebar/sidebar"
import Rightbar from "../../components/rightbar/rightbar"
import Feed from '../../components/feed/feed'
import "./Home.css"
export default function Home(){
    return(
        <div>
            <div className="homeContainer">
                <Sidebar/>
                <Feed className="feed"/>
                <Rightbar/>
            </div>
            
        </div>
    )
}
