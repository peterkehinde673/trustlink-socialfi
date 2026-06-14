import UserCard from "../components/UserCard";
import { user } from "../data/userData";
function Leaderboard() {
  const users = [
    { name: user.name, reputation: user.reputation },
    { name: "Alice", reputation: 88 },
    { name: "John", reputation: 75 },
  ];

  return (
    <div>
      <h1>Leaderboard</h1>

      {users.map((u, i) => (
        <UserCard
          key={i}
          name={u.name}
          reputation={u.reputation}
        />
      ))}
    </div>
  );
}

export default Leaderboard;
