function UserCard({ name, reputation }: { name: string; reputation: number }) {
  return (
    <div
      style={{
        border: "1px solid #333",
        borderRadius: "10px",
        padding: "12px",
        marginBottom: "10px",
  }}
>
      <h3>{name}</h3>
      <p>Reputation: {reputation}</p>
    </div>
  );
}

export default UserCard;
