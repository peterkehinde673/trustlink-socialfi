import { user } from "../data/userData";

function Dashboard() {
  return (
    <div>
      <h1>TrustLink Dashboard</h1>

      <p>Your Reputation: {user.reputation}</p>
      <p>Total Endorsements: {user.endorsements}</p>
    </div>
  );
}

export default Dashboard;
