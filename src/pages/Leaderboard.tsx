function Leaderboard() {
  const users = [
    { name: "Peter", reputation: 92 },
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
