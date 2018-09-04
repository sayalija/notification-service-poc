const http = require('http');
const slackService = require('./slack-service.js');

const constructReqOptions=function(data) {
  return options = {
    hostname: 'namingservice-test.herokuapp.com',
    headers: {
      'Authorization': process.env.NAMING_SERVICE_TOKEN,
      'User-Agent': 'sayali'
    },
    path: `/api/interns/search?q=${data.to}`
  };
};

const fetch = function(data) {

  options=constructReqOptions(data);

  http.get(options, (res) => {
   let rawData = '';
   res.on('data', (chunk) => { rawData += chunk; });
   res.on('end', () => {
    try {
      const internInfo = JSON.parse(rawData)[0];
      slackService.postMessage({"to": `@${internInfo.slack.username}`, "message": data.message, "from": data.from});
    } catch (e) {
      console.error(e.message);
    }
    });
  });
}

module.exports={fetch};
