const fs = require("fs");
const path = require("path");

class FileProcessor {
  convertBase64toDatFile(data) {
		const filePath = process.cwd() + "/files/";
		const binaryData = Buffer.from(data, "base64");
		fs.writeFileSync(`${filePath}` + fileName, binaryData);
	}
}

module.exports = {
	FileProcessor,
};
