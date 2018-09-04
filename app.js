const express = require('express');
const bodyParser = require('body-parser');
const namingService = require('./naming-service.js');
const app = express();
const port = process.env.NS_PORT || 8080;

app.use(bodyParser.json());

app.post('/notify',(req,res)=>{
  namingService.fetch(req.body);
  res.send({"status": "success"});
})


app.listen(port);
console.log('Magic happens on port ' + port);
