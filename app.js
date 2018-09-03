const express = require('express');
const app = express();
const port = process.env.NS_PORT || 8080;

app.post('/notify',(req,res)=>{
  res.send({"status": "success"});
})



app.listen(port);
console.log('Magic happens on port ' + port);
