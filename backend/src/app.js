const axios = require('axios')
const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config()

const API_TOKEN = process.env.API_TOKEN
const baseURL = 'https://api.sportmonks.com/v3/football'

const app = express()

// TEMP CODE
app.use(cors())

app.use('/api/test', (req, res, next) => {
  res.send({ msg: 'Hello World' })
})

// TODO Need to retun an array of players rather than an object
app.use('/api/team', async (req, res, next) => {
  try {
    const response = await axios.get(
      `${baseURL}/squads/teams/254172?api_token=${API_TOKEN}&include=player`
    )

    // Get the response data from the response.
    const data = response.data

    // Initialize players object to hold associated data.
    const players = {}

    for (const player of data.data) {
      if (!players[player.player.name]) {
        players[player.player.name] = player
      }
    }

    res.send({ players: players })
  } catch (error) {
    next(error)
  }
})

module.exports = {
  app
}
