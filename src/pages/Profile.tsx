import { user } from "../data/userData";
import Badge from "../components/Badge";
import WalletConnect from "../components/WalletConnect";
function Profile() {
  return (
    <div>
      <h1>Your Profile</h1>

      <p>Name: {user.name}</p>
      <p>Reputation: {user.reputation}</p>
      <Badge reputation={user.reputation} />
      <p>Endorsements: {user.endorsements}</p>
      <p>Wallet: {user.wallet}</p>

      <WalletConnect />
    </div>
  );
}

export default Profile;
