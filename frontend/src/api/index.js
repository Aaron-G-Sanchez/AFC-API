const getPlayers = async () => {
  const res = await fetch('http://localhost:3001/api/team')
  return res.json()
}

export { getPlayers }
