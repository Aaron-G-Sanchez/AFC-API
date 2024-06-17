import express, {Express, Request, Response, NextFunction, Router} from 'express'

const router: Router = express.Router()

// TODO: Add functionality. 
// Get a list of all the players.
router.get('/', async(req: Request, res: Response, next: NextFunction) => {
  res.send({msg: "Players endpoint hit!"})
})

export default router