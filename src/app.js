const axios = require('axios')
const express = require('express')
const dotenv = require('dotenv')
dotenv.config()

const API_TOKEN = process.env.API_TOKEN
const baseURL = 'https://api.sportmonks.com/v3/football'

const app = express()

app.use('/test', async (req, res, next) => {
  res.json({ msg: 'Hello World' })
})

app.use('/api/team', async (req, res, next) => {
  // let response = await axios.get(
  //   `${baseURL}/squads/teams/254172?api_token=${API_TOKEN}`
  // )

  await fetch(
    `${baseURL}/squads/teams/254172?api_token=${API_TOKEN}&include=player`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      res.send({ data })
    })

  // res.send({ msg: 'lol' })
})

module.exports = {
  app
}
