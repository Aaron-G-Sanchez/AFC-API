import './App.css'
import { useQuery } from '@tanstack/react-query'
import { getPlayers } from './api'

const App = () => {
  const { isPending, data } = useQuery({
    queryKey: ['players'],
    queryFn: async () => await getPlayers()
  })

  if (isPending) {
    return <span>Loading...</span>
  }

  return (
    <>
      <div>
        <p>ROSTER</p>
        <div>
          {Object.keys(data.players).map((player, idx) => (
            <p key={idx}>{player}</p>
          ))}
        </div>
      </div>
    </>
  )
}

export default App
