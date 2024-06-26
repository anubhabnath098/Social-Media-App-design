import "./feed.css"
import React from 'react'
import Share from "../../share/share"
import Post from "../Posts/post"
import {Posts} from "../../dummyData"
export default function Feed() {
  return (
    <div className="feed">
      <div className="feedWrapper">
          <Share/>
          {Posts.map((p)=>(
            <Post key={p.id} post={p}/>
          ))}
          
      </div>
    </div>
  )
}
