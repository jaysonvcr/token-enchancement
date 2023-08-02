class ResponseParser {
  constructor(response) {
    this.response = response;
  }
  getBase64FromGPM() {
    if (this.response?.count) {
      return this.response?.count ;
    }
    return 1; // throw exception here
  }
  static getBase64FromCPM() {
    if (this.response?.count) {
      return this.response.count;
    }
    return 1; // throw exception here
  }
  static getBase64PruOne() {
    if (this.response?.count) {
      return this.response.count;
    }
    return 1; // throw exception here
  }
}

module.exports = {
  ResponseParser,
};
