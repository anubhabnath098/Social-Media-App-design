import Home from './pages/home/Home'
import Profile from './pages/Profile/Profile';
import Topbar from './components/topbar/Topbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App(){
    return(<div>
            <Router>
               <Topbar/>
               <Routes>
               <Route path="/" element={<Home />} />
                <Route path="/profile" element={<Profile />} />
                </Routes> 
            </Router>
        </div>)
}

export default App
