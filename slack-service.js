const http = require('https');
const TOKEN=process.env.SLACK_TOKEN;

const constructReqOptions=function(data) {
  return {
    hostname: 'slack.com',
    path: `/api/chat.postMessage?token=${TOKEN}&text=${data.message}&channel=${data.to}&username=${data.from}`,
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'sayali'
    }
  };
}

const postMessage=function(data) {
  options=constructReqOptions(data);
  console.log(`Posting message on slack ${data.message}`);

  const req = http.request(options, function(res) {
    console.log('Response Status: ' + res.statusCode);
    console.log('Response Headers: ' + JSON.stringify(res.headers));
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
