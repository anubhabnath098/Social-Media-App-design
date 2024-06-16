import "./Topbar.css"
import ChatIcon from '@mui/icons-material/Chat';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import NotificationsIcon from '@mui/icons-material/Notifications';
import {Link} from 'react-router-dom'
export default function Topbar(){
    return (<div className="topbarContainer">
        <div className="topbarLeft">
            <span className="logo">FriendBook</span>
        </div>
        <div className="topbarCenter">
            <div className="searchbar">
            <SearchIcon className="searchIcon"/>
            <input type="text" placeholder="Search for a friend" className="searchInput" />
            </div>
        </div>
        <div className="topbarRight">
            <div className="topbarLinks">
                <span className="topbarLink"><Link className="homepageLink" to="/">Homepage</Link></span>
                <span className="topbarLink">Timeline</span>
            </div>
            <div className="topbarIcons">
                <div className="topbarIconItems">
                    <PersonIcon className="icon"/>
                    <span className="topbarItemBadge">1</span>
                </div>
                <div className="topbarIconItems">
                    <ChatIcon className="icon"/>
                    <span className="topbarItemBadge">2</span>
                </div>
                <div className="topbarIconItems">
                    <NotificationsIcon className="icon"/>
                    <span className="topbarItemBadge">1</span>
                </div>
            </div>
            <Link to="/profile"><img src="../../assets/dp1.jpg" alt="" className="topbarImg" /></Link>
        </div>
    </div>)
}