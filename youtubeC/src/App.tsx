import './App.css'
import  Navbar from './components/NavBar/TopBar'
import Sidebar from './components/NavBar/sideBar'
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/home/home'
import {Video } from './pages/video/video'

// import VideoGrid from './components/videos'
function App() {

  return (
    <>
      
      <Navbar/>
      <div className='flex'>
        <Sidebar isOpen={true} />
        {/* <VideoGrid /> */}
      </div>
        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/videos/:categoryId/:videoId" element={<Video />} />
        </Routes> */}
      
   </>
  )
}

export default App
