import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ marginBottom: "20px" }}>
      <Link to="/">Dashboard</Link> |{" "}
      <Link to="/profile">Profile</Link> |{" "}
      <Link to="/leaderboard">Leaderboard</Link> |{" "}
      <Link to="/endorsement">Endorsement</Link> |{" "}
      <Link to="/about">About</Link>
    </nav>
  );
}

export default Navbar;
