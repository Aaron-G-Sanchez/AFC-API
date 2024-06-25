import express, {
  Express,
  Request,
  Response,
  NextFunction,
  Router
} from 'express'
import 'dotenv/config'
import { Player } from '../../types/types'

const API_TOKEN = process.env.API_TOKEN
const router: Router = express.Router()

// TODO: Add functionality.
// Get a list of all the players.
router.get('/', async (req: Request, res: Response, next: NextFunction) => {
  const afcID: number = 254172
  const baseRoute: string = `https://api.sportmonks.com/v3/football/squads/teams/${afcID}?api_token=${API_TOKEN}&include=player`

  // Fetch the data from the sportmonks api.
  const apiRes = await fetch(baseRoute)
  const data = await apiRes.json()

  // TODO Add function to type guard
  const typedData = data.data as Player[]

  // TODO: Need to loop through the json and isolate the players.
  res.send({ players: typedData })
})

export default router
