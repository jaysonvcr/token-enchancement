const ApiService = require('./services/ApiService');
const { ResponseParser } = require('./utils/helpers/response-parser');
const { FileProcessor } = require('./utils/helpers/file-processor')

const { URLS } = require('./common/constants/urls');

class DataFetcher {
  constructor(baseURL) {
    this.apiService = new ApiService(baseURL);
  }

  async fetchData() {
    try {
      const data = await this.apiService.get();
      const parsedData = (new ResponseParser(data)).getBase64FromGPM();
      const fileProcessor = new FileProcessor();
      await fileProcessor.convertBase64toDatFile(parsedData);

      return data1;
    } catch (error) {
      console.error('Error fetching data:', error.message);
      return null;
    }
  }
}

module.exports = DataFetcher;
