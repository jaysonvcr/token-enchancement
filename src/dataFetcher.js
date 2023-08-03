const ApiService = require("./services/ApiService");

const { ResponseParser } = require("./utils/helpers/response-parser");
const { FileProcessor } = require("./utils/helpers/file-processor");

const { URLS } = require("./common/constants/urls");

class DataFetcher {
	constructor(baseURL) {
		this.apiService = new ApiService(baseURL);
	}

	async fetchData() {
		try {
			const data = await this.apiService.get();
			const parsedData = new ResponseParser(data).getBase64FromGPM();
			const fileProcessor = new FileProcessor();
			await fileProcessor.convertBase64toDatFile(parsedData);

			return data1;
		} catch (error) {
			console.error("Error fetching data:", error.message);
			return null;
		}
	}

	async fetchDataFromPruone() {
		try {
      const pruOneQueryData = {
        "collectionName": "pruone-payments",
        "pipeline": [
          {
            "$match": {
              "_id": "07282023RenewalBilling"
            }
          }
        ],
        "options": {
          "allowDiskUse": true
        }
      };

			const data = await this.apiService.post(pruOneQueryData);
			// const parsedData = new ResponseParser(data).getBase64FromGPM();
			// const fileProcessor = new FileProcessor();
			// await fileProcessor.convertBase64toDatFile(parsedData);

			return data;
		} catch (error) {
			console.error("Error fetching data:", error.message);
			return null;
		}
	}
}

module.exports = DataFetcher;
