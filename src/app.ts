import express, { Express, Request, Response, NextFunction } from 'express'

export const app: Express = express()

app.use('/hello', async (req: Request, res: Response, next: NextFunction) => {
  res.send({ msg: 'world' })
})
