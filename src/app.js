const axios = require('axios')
const express = require('express')
const dotenv = require('dotenv')
dotenv.config()

const API_TOKEN = process.env.API_TOKEN
const baseURL = 'https://api.sportmonks.com/v3/football'

const app = express()

app.use('/api/team', async (req, res, next) => {
  try {
    const response = await axios.get(
      `${baseURL}/squads/teams/254172?api_token=${API_TOKEN}&include=player`
    )

    const data = response.data

    res.send({ data })
  } catch (error) {
    next(error)
  }
})

module.exports = {
  app
}
