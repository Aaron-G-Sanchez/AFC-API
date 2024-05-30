import express, { Express, Request, Response, NextFunction } from 'express'
import 'dotenv/config'
import morgan from 'morgan'

const API_TOKEN = process.env.API_TOKEN

export const app: Express = express()

app.use(morgan('dev'))

app.use('/hello', async (req: Request, res: Response, next: NextFunction) => {
  res.send({ msg: 'world' })
  next()
})

// TODO Add route to fetch next match.

// TODO Add route to fetch remaining games.

// TODO Add route to fetch all players.
