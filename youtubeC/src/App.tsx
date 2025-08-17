import './App.css'
import  Navbar from './components/NavBar/TopBar'
import Sidebar from './components/NavBar/sideBar'
function App() {

  return (
    <>
      <Sidebar isOpen={false} />
      <Navbar/>

   </>
  )
}

export default App
