import 'dotenv/config';
const ALCHEMY_API_KEY = process.env.ALCHEMY_API_KEY;

import axios from 'axios';

if (!ALCHEMY_API_KEY) {
  console.error('ALCHEMY_API_KEY is not defined in the environment variables');
  process.exit(1);
}

const url = `https://scroll-mainnet.g.alchemy.com/v2/${ALCHEMY_API_KEY}`;

const payload = {
  jsonrpc: '2.0',
  id: 1,
  method: 'eth_blockNumber',
  params: [],
};

axios
  .post(url, payload)
  .then((response) => {
    console.log('Block Number:', response.data.result);
  })
  .catch((error) => {
    console.error(error);
  });
