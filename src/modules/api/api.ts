import ENDPOINTS, { Endpoints, END_POINTS } from './endpoints'

const BASE_URL = 'https://5f7998dbe402340016f9321f.mockapi.io'

class Api {
  baseUrl: string

  endpoints: Endpoints

  constructor(baseUrl: string, endpoints: Endpoints) {
    this.baseUrl = baseUrl
    this.endpoints = endpoints
  }

  async generateRequest(endpoint: keyof typeof END_POINTS, data: BodyInit) {
    const { method, uri } = this.endpoints[endpoint]

    return fetch(`${this.baseUrl}${uri}`, { method, body: data })
  }

  async fetch(endpoint: keyof typeof END_POINTS, data: BodyInit) {
    const response = await this.generateRequest(endpoint, data)

    return response.json()
  }
}

export default new Api(BASE_URL, ENDPOINTS)
