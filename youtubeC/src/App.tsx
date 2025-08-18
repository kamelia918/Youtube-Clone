import './App.css'
import  Navbar from './components/NavBar/TopBar'
import Sidebar from './components/NavBar/sideBar'
import VideoGrid from './components/videos'
function App() {

  return (
    <>
      
      <Navbar/>
      <div className='flex'>
        <Sidebar isOpen={true} />
        <VideoGrid />
      </div>
   </>
  )
}

export default App
