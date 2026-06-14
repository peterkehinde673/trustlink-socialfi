import WalletConnect from "../components/WalletConnect";

function Profile() {
  return (
    <div>
      <h1>Your Profile</h1>

      <p>Name: Peter</p>
      <p>Reputation: 92</p>

      <WalletConnect />
    </div>
  );
}

export default Profile;
