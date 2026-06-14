function Badge({ reputation }: { reputation: number }) {
  if (reputation >= 100) return <p>🥇 Gold Trust Badge</p>;
  if (reputation >= 50) return <p>🥈 Silver Trust Badge</p>;
  return <p>🥉 Bronze Trust Badge</p>;
}

export default Badge;
