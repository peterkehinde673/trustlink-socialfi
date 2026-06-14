import { useState } from "react";

function WalletConnect() {
  const [connected, setConnected] = useState(false);

  return (
    <div>
      <h3>Wallet</h3>

      {connected ? (
        <p>✅ Wallet Connected</p>
      ) : (
        <button
          onClick={() => setConnected(true)}
          style={{
            padding: "10px 15px",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
  }}
>
          Connect Wallet
        </button>
      )}
    </div>
  );
}

export default WalletConnect;
