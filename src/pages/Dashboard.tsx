import { user } from "../data/userData";
import ActivityFeed from "../components/ActivityFeed";
function Dashboard() {
  return (
    <div>
      <h1>TrustLink Dashboard</h1>

      <p>Your Reputation: {user.reputation}</p>
      <p>Total Endorsements: {user.endorsements}</p>
      <h2>Recent Activity</h2>
      <ActivityFeed />
    </div>
  );
}

export default Dashboard;
