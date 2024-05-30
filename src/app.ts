import express, { Express, Request, Response, NextFunction } from 'express'
import morgan from 'morgan'

export const app: Express = express()

app.use(morgan('dev'))

app.use('/hello', async (req: Request, res: Response, next: NextFunction) => {
  res.send({ msg: 'world' })
  next()
})
