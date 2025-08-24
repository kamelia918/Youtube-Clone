import "./App.css";
import { useState } from "react";
import Navbar from "./components/NavBar/TopBar";
import Sidebar from "./components/NavBar/sideBar";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/home";
import { Video } from "./pages/video/video";

// import VideoGrid from './components/videos'
function App() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleNavbar = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <>
      <Navbar onToggle={toggleNavbar} />
      <div className="flex">
        <Sidebar isOpen={isOpen} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/videos/:categoryId/:videoId" element={<Video />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
