import {describe, test, expect} from '@jest/globals'
import request from 'supertest'
import { app } from '../src/app'

describe("Server.ts tests", () => {
  test("/hello route test", async() => {
    const res = await request(app).get('/hello')

    expect(res.body).toEqual({msg: "world"})
  })
} )