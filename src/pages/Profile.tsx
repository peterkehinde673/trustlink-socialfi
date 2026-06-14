import { user } from "../data/userData";
import Badge from "../components/Badge";
import WalletConnect from "../components/WalletConnect";
function Profile() {
  return (
    <div>
      <h1>Profile</h1>

      <p>Name: {user.name}</p>
      <p>Reputation: {user.reputation}</p>

      {/* ✅ THIS is how you use Badge */}
      <Badge reputation={user.reputation} />

      {/* Wallet component */}
      <WalletConnect />
    </div>
  );
}

export default Profile;
