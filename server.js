const express = require("express");
const path = require("path");
const app = express();
const rp = require('request-promise-native');
const aws = require('aws-sdk');

let s3 = new aws.S3({
  key1: process.env.KEY1,
  key2: process.env.KEY2,
  key3: process.env.KEY3

});
const requestbitcoin = {
  method: 'GET',
  uri: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest',
  qs: {
    'id':'1',
    'convert':'USD'
  },
  headers: {
  'X-CMC_PRO_API_KEY': process.env.KEY1
  },
  json: true,
  gzip: true
};

const requestOptionsbtc = {
  method: 'GET',
  uri: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest',
  qs: {
    'id':'3849',
    'convert':'BTC'
  },
  headers: {
 'X-CMC_PRO_API_KEY': process.env.KEY2
  },
  json: true,
  gzip: true
};

const requestOptionsusd = {
  method: 'GET',
  uri: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest',
  qs: {
    'id':'3849',
    'convert':'USD'
  },
  headers: {
  'X-CMC_PRO_API_KEY': process.env.KEY3
  },
  json: true,
  gzip: true
};
app.get('/bitcoin', (req, res) => {
  rp(requestbitcoin).then(response => {
    const priceofbitcoin = Math.round(response.data[1].quote.USD.price);
    res.send({ priceofbitcoin });
  }).catch((err) => {
    console.log('API call error:', err.message);
  })
});
app.get('/btc', (req, res) => {
  rp(requestOptionsbtc).then(response => {
    const price = Math.round(response.data[3849].quote.BTC.price * 1000000)/1000000;
    res.send({ price });
  }).catch((err) => {
    console.log('API call error:', err.message);
  })
});
app.get('/usd', (req, res) => {
  rp(requestOptionsusd).then(response => {
    const price = Math.round(response.data[3849].quote.USD.price*10000)/10000;
    const volume_not = Math.round(response.data[3849].quote.USD.volume_24h);
    const volume = volume_not.toLocaleString('en');
    const marketcap_not = price*500000000;
    const marketcap = marketcap_not.toLocaleString('en');
    const newresponse = {price, volume, marketcap}
    res.send({ newresponse });
  }).catch((err) => {
    console.log('API call error:', err.message);
  })
});
// Serve static assets if we're in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static(path.join(__dirname, "client", "build")));

  app.get("/*", function(req, res) {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}
const port = process.env.PORT || 5000; // process.env.port helps set Heroku's port

app.listen(port, () => console.log(`Server up and running on port ${port} !`));
