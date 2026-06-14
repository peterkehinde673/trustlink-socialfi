import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Leaderboard from "./pages/Leaderboard";
import Endorsement from "./pages/Endorsement";

function App() {
  return (
    <BrowserRouter>
      <div style={{ padding: "20px" }}>
        <nav>
          <Link to="/">Dashboard</Link> |{" "}
          <Link to="/profile">Profile</Link> |{" "}
          <Link to="/leaderboard">Leaderboard</Link> |{" "}
          <Link to="/endorsement">Endorsement</Link>
        </nav>

        <hr />

        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/endorsement" element={<Endorsement />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
