import './App.css'
import Sidebar from './components/NavBar/sideBar'

function App() {

  return (
    <>
      <Sidebar isOpen={false} />
      <h1 className="text-3xl font-bold underline">
    Hello world!
  </h1>    </>
  )
}

export default App
