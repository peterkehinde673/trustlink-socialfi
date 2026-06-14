import ActivityFeed from "../components/ActivityFeed";
import { user } from "../data/userData";
function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>

      <p>Your Reputation: {user.reputation}</p>

      {/* THIS is how you use ActivityFeed */}
      <ActivityFeed />
    </div>
  );
}

export default Dashboard;
