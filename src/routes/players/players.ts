import express, {Express, Request, Response, NextFunction, Router} from 'express'
const router: Router = express.Router()

// Return a list of all the players.
router.get('/', async(req: Request, res: Response, next: NextFunction) => {
  res.send({msg: "player endpoint hit!"})
})

export default router