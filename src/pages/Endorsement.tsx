import { useState } from "react";

function Endorsement() {
  const [reputation, setReputation] = useState(92);

  const giveEndorsement = () => {
    setReputation(reputation + 1);
  };

  return (
    <div>
      <h1>Endorse a User</h1>

      <p>Current Reputation: {reputation}</p>

      <button onClick={giveEndorsement}>
        Give Endorsement
      </button>
    </div>
  );
}

export default Endorsement;
