import {React,useState} from 'react'
import "./post.css"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Users } from '../../dummyData';

export default function Post({post}) {
  const [like,setLike]=useState(post.like)
  const [isLiked,setIsLiked] = useState(false);
  function likeHandler(){
    if(isLiked===false){
      setLike(like+1);
      setIsLiked(true);
    }
    else{
      setLike(like-1);
      setIsLiked(false);
    }
  }
  return (
    <div className='post'>
      <div className="postWrapper">
        <div className="postTop">
            <div className="postTopLeft">
                <img src={Users.filter(u=>u.id===post.userId)[0].profilePicture} alt="" className='postProfileImg'/>
                <span className="postUsername">{Users.filter(u=>u.id===post.userId)[0].username}</span>
                <div className="postDate">{post.date}</div>
            </div>
            <div className="postTopRight">
                <MoreVertIcon/>
            </div>
        </div>
        <div className="postCenter">
            <span className="postText">{post?.desc}</span>
            <img src={post.photo} alt="" className='postImg'/>
        </div>
        <div className="postBottom">
            <div className="postBottomLeft">
                <svg onClick={likeHandler} className="likeImg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" id="like"><path fill="#4080ff" d="M256 9.43C119.82 9.43 9.43 119.82 9.43 256S119.82 502.57 256 502.57 502.57 392.18 502.57 256 392.18 9.43 256 9.43zm-71.5 357.5c0 6.4-5.6 11.63-12.44 11.63h-32.81c-6.85 0-12.45-5.23-12.45-11.63v-99.79c0-6.39 5.6-11.63 12.45-11.63h32.81c6.84 0 12.44 5.24 12.44 11.63zM377 302.7a18.11 18.11 0 0 0-4.88 15.13c.92 6.37.22 15-7.52 21.94a18.65 18.65 0 0 0-5.69 17.13c2 12-4.14 29-57.38 26.49l-69.3-1.65c-.6 0-1.19-.06-1.79-.13-5.71-.71-35.56-5-33.3-18.26l-.12-92.8a18.49 18.49 0 0 1 1.42-7.11l39.14-76.63a8.25 8.25 0 0 0 .9-3.74v-35.93a18.19 18.19 0 0 1 9-15.85c5.76-3.29 13.81-5 22.73 1.56 17.53 13 17.95 20 17.95 20s7.93 23.39 4.59 44.68A18.45 18.45 0 0 0 311 218.87h39.88a17.69 17.69 0 0 1 1.93.1c6.09.67 33.79 5.43 24.05 36.51a17.76 17.76 0 0 0 3 16.31c5.33 6.67 9.79 17.86-2.86 30.91z"></path><path fill="#fff" d="M376.86 255.48c9.74-31.08-18-35.84-24.05-36.51a17.69 17.69 0 0 0-1.93-.1H311a18.45 18.45 0 0 1-18.22-21.3c3.34-21.29-4.59-44.68-4.59-44.68s-.42-7.09-17.95-20c-8.92-6.58-17-4.85-22.73-1.56a18.19 18.19 0 0 0-9 15.85v35.93a8.25 8.25 0 0 1-.9 3.74l-39.14 76.63a18.49 18.49 0 0 0-1.42 7.11l.12 92.8c-2.26 13.22 27.59 17.55 33.3 18.26.6.07 1.19.11 1.79.13l69.3 1.65c53.24 2.47 59.41-14.54 57.38-26.49a18.65 18.65 0 0 1 5.69-17.13c7.74-6.9 8.44-15.57 7.52-21.94A18.11 18.11 0 0 1 377 302.7c12.63-13.05 8.17-24.24 2.88-30.91a17.76 17.76 0 0 1-3.02-16.31zM172.06 255.51h-32.81c-6.85 0-12.45 5.24-12.45 11.63v99.79c0 6.4 5.6 11.63 12.45 11.63h32.81c6.84 0 12.44-5.23 12.44-11.63v-99.79c0-6.39-5.6-11.63-12.44-11.63z"></path></svg>

                <svg onClick={likeHandler} className="likeImg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" id="love"><circle cx="256" cy="256" r="244.49" fill="#f25268"></circle><path fill="#fff" d="M381.91 157.66C339.49 99.28 256 133.72 256 193c0-59.29-83.5-93.74-125.93-35.35C86.23 218 129.45 323.74 256 384.48 382.54 323.74 425.77 218 381.91 157.66z"></path></svg>
                <span className="postlikeCounter">{like} people liked it</span>
            </div>
            <div className="postBottomRight">
                <span className="postCommentText">{post.comment} comments</span>
            </div>
        </div>
      </div>
    </div>
  )
}
