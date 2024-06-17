import { describe, test, expect } from '@jest/globals'
import request from 'supertest'
import { app } from '../../src/app'

describe('players.ts', () => {
  test('test route', async () => {
    const res = await request(app).get('/api/v1/players')

    expect(res.body).toEqual({msg: "Players endpoint hit!"})
  })
})
