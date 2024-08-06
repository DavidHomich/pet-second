import Album from "../Album/Album";
import Albums from "../Albums/Albums";
import Artists from "../Artists/Artists";

import Header from "../Header/Header";
import HomePage from "../Home/Home";
import Player from "../Player/Player";

import SideBar from "../SideBar/SideBar";
import Trending from "../Trending/Trending";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="">
        <SideBar />
        <Header />
        <Routes>
          <Route path="/trending" element={<Trending />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/artists" element={<Artists />} />
          <Route path="/albums" element={<Albums />} />
          <Route path="/album/:id" element={<Album />} />
        </Routes>
        <Player />
      </div>
    </Router>
  );
}

export default App;
