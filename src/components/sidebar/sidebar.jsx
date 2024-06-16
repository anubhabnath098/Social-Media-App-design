import "./sidebar.css"
import React from 'react'
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import GroupsIcon from '@mui/icons-material/Groups';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import WorkIcon from '@mui/icons-material/Work';
import EventIcon from '@mui/icons-material/Event';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import { Users } from "../../dummyData";
import Closefriends from "../closeFriends/closeFriends";
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
            <li className="sidebarListItem">
                <RssFeedIcon/>
                <span className="sidebarListItemText">Feed</span>
            </li>
            <li className="sidebarListItem">
                <ChatIcon/>
                <span className="sidebarListItemText">Chats</span>
            </li>
            <li className="sidebarListItem">
                <OndemandVideoIcon/>
                <span className="sidebarListItemText">Videos</span>
            </li>
            <li className="sidebarListItem">
                <GroupsIcon/>
                <span className="sidebarListItemText">Groups</span>
            </li>
            <li className="sidebarListItem">
                <BookmarkIcon/>
                <span className="sidebarListItemText">Bookmarks</span>
            </li>
            <li className="sidebarListItem">
                <QuestionAnswerIcon/>
                <span className="sidebarListItemText">Questions</span>
            </li>
            <li className="sidebarListItem">
                <WorkIcon/>
                <span className="sidebarListItemText">Jobs</span>

            </li>
            <li className="sidebarListItem">
                <EventIcon/>
                <span className="sidebarListItemText">Events</span>
            </li>
            <li className="sidebarListItem">
                <LibraryBooksIcon/>
                <span className="sidebarListItemText">Courses</span>
            </li>
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr"/>
        <div className="sidebarFriends">
        <ul className="sidebarFriendList">
            {Users.map(u=>(
                <Closefriends key={u.id} user={u}/>
            ))}
        </ul>
        
        </div>
        
      </div>
    </div>
  )
}
