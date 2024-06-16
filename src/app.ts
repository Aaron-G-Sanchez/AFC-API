import express, { Express, Request, Response, NextFunction } from 'express'
import 'dotenv/config'
import morgan from 'morgan'

import {playerRouter, matchesRouter} from './routes'

const API_TOKEN = process.env.API_TOKEN

export const app: Express = express()

app.use(morgan('dev'))

app.use('/hello', async (req: Request, res: Response, next: NextFunction) => {
  res.send({ msg: 'world' })
  next()
})

// TODO Add route to fetch next match.
app.use('/api/v1/matches', matchesRouter)

// TODO Add route to fetch all players.
app.use('/api/v1/players', playerRouter)