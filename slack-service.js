const http = require('https');
const TOKEN=process.env.SLACK_TOKEN;

const constructReqOptions=function(data) {
  const options = {
    hostname: 'slack.com',
    path: `/api/chat.postMessage?token=${TOKEN}&text=${data.message}&channel=${data.to}&username=${data.from}`,
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'sayali'
    }
  };

  return options;
}

const postMessage=function(data) {
  options=constructReqOptions(data);

  const req = http.request(options, function(res) {
    console.log('Status: ' + res.statusCode);
    console.log('Headers: ' + JSON.stringify(res.headers));
    res.setEncoding('utf8');
    res.on('data', function (body) {
      console.log('Body: ' + body);
    });
  });

  req.on('error', function(e) {
    console.log('problem with request: ' + e.message);
  });

  req.end();
}

module.exports={postMessage};
