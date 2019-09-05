const express = require("express");
const router = express.Router();

router.get("/load", (req, res) => {
  const rp = require('request-promise');
  const requestOptions = {
    method: 'GET',
    uri: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
    qs: {
      'start': '1',
      'limit': '1',
      'convert': 'USD,BTC'
    },
    headers: {
      'X-CMC_PRO_API_KEY': 'b54bcf4d-1bca-4e8e-9a24-22ff2c3d462c'
    },
    json: true,
    gzip: true
  };
  
  rp(requestOptions).then(response => {
    console.log('API call response:', response);
  }).catch((err) => {
    console.log('API call error:', err.message);
  });

  });

module.exports = router;