function UserCard({ name, reputation }: { name: string; reputation: number }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>Reputation: {reputation}</p>
    </div>
  );
}

export default UserCard;
