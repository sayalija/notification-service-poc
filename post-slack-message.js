const http = require('https');
const TOKEN=process.env.SLACK_TOKEN;

console.log(TOKEN);
const options = {
  hostname: 'slack.com',
  path: `/api/chat.postMessage?token=${TOKEN}&text=HelloWorld!&channel=@jagtapsayali0304&username=tweetable`,
  method: 'POST',
  headers: {
      'Content-Type': 'application/json',
      'User-Agent': 'sayali'
  }
};

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
