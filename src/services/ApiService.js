const axios = require('axios');

class APIService {
  constructor(baseURL) {
    this.api = axios.create({
      baseURL: baseURL,
    });
  }

  async get(endpoint) {
    try {
      const response = await this.api.get(endpoint);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async post(data) {
    try {
      const response = await this.api.post(data);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = APIService;
