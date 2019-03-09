
const URL = 'https://9o0kewwo4l.execute-api.ca-central-1.amazonaws.com/api/'

class Client {

  async get(endpoint, options) {
    return await this.sendRequest('GET', endpoint)
  }

  async sendRequest(method, endpoint) {
    const options = { method: method, headers: { 'Content-Type': 'application/json' } }

    const response = await new Promise((resolve, reject) => {
      fetch(URL + endpoint, options)
        .then((response) => resolve(response))
        .catch(reject)
    })

    return await response.json()
  }
}

export default new Client()