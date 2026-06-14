import { user } from "../data/userData";
function Dashboard() {
  return (
    <div>
      <h1>TrustLink Dashboard</h1>

      <h2>Network Statistics</h2>

      <p>Total Users: 128</p>
      <p>Total Endorsements: 584</p>
      <p>Your Reputation: {user.reputation}</p>

      <hr />

      <h2>Recent Activity</h2>

      <ul>
        <li>Alice endorsed Peter</li>
        <li>John endorsed Sarah</li>
        <li>Peter received +1 reputation</li>
      </ul>
    </div>
  );
}

export default Dashboard;
