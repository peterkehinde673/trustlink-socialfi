import { user } from "../data/userData";
function Leaderboard() {
  const users = [
    { name: user.name, reputation: user.reputation },
    { name: "Alice", reputation: 88 },
    { name: "John", reputation: 75 },
    { name: "Sarah", reputation: 70 },
  ];

  return (
    <div>
      <h1>Top Trusted Users</h1>

      <ol>
        {users.map((user, index) => (
          <li key={index}>
            {user.name} - {user.reputation}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Leaderboard;
