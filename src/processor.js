const DataFetcher = require('./dataFetcher');
const { URLS } = require('./common/constants/urls');

const gpmUrl = URLS.GPM;
const cpmUrl = URLS.CPM;
const pruOneUrl = URLS.PRUONE;

const dataFetcher = new DataFetcher(gpmUrl);

dataFetcher
.fetchData()
  .then(data => {
    if (data) {
      console.log('Fetched data:', data);
    } else {
      console.log('Data fetching failed.');
    }
  });
