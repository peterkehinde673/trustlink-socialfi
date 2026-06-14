import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Leaderboard from "./pages/Leaderboard";
import Endorsement from "./pages/Endorsement";

import Navbar from "./components/Navbar";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div
        style={{
          padding: "20px",
          backgroundColor: "#0d1117",
          color: "white",
          minHeight: "100vh",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <Navbar />

        <hr />

        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/endorsement" element={<Endorsement />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
