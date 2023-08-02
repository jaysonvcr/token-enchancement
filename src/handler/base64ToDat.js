const fs = require('fs');
const path = require('path');

const filePath = process.cwd() + '/files/';

base64ToDat = (base64String, fileName) => {
  const binaryData = Buffer.from(base64String, 'base64');
  fs.writeFileSync(`${filePath}`+ fileName, binaryData);
}

module.exports = base64ToDat;