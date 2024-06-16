import express, {Express, Request, Response, NextFunction, Router} from 'express'

const router: Router = express.Router()

// TODO: Add functionality
// Get the next match to be played.
router.get('/next-match', (req: Request, res: Response, next: NextFunction) => {
  res.send({msg: "Next match endpoint hit!"})
})

// TODO: Add functionality
// Get a list of remaining matches to be played.
router.get('/remaining-matches', (req: Request, res: Response, next: NextFunction) => {
  res.send({msg: "Remaining matches endpoint hit!"})
})

export default router