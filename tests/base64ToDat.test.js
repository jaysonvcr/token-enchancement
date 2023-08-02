const fs = require('fs');
const base64ToDat = require('../src/handler/base64ToDat');
const ApiService = require('../src/services/ApiService')

test('Base64 to DAT conversion', () => {
  const base64String = 'UHJ1TGlmZVVL'; // PruLifeUK base64String
  const fileName = 'receipting-data.dat';

  base64ToDat(base64String, fileName);

  const readData = fs.readFileSync(fileName, 'utf-8');
  expect(readData).toBe('PruLifeUK');
});