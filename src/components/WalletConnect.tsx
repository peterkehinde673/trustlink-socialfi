import { useState } from "react";

function WalletConnect() {
  const [connected, setConnected] = useState(false);

  return (
    <div>
      <h3>Wallet</h3>

      {connected ? (
        <p>✅ Wallet Connected</p>
      ) : (
        <button onClick={() => setConnected(true)}>
          Connect Wallet
        </button>
      )}
    </div>
  );
}

export default WalletConnect;
