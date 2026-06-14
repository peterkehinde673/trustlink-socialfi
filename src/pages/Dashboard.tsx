import { user } from "../data/userData";

function Dashboard() {
  return (
    <div>
      <h1>TrustLink Dashboard</h1>

      <p>Your Reputation: {user.reputation}</p>
      <p>Endorsements: {user.endorsements}</p>
      <p>Wallet: {user.wallet}</p>
    </div>
  );
}

export default Dashboard;
