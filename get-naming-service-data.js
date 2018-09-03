const http = require('http');
const options = {
  hostname: 'namingservice-test.herokuapp.com',
  headers: {
    'Authorization': process.env.NAMING_SERVICE_TOKEN,
    'User-Agent': 'sayali'
  },
  path: '/api/interns/search?q=17925'
};

http.get(options, (res) => {
 let rawData = '';
 res.on('data', (chunk) => { rawData += chunk; });
 res.on('end', () => {
  try {
    const parsedData = JSON.parse(rawData);
    console.log(parsedData);
  } catch (e) {
    console.error(e.message);
  }
});
})
