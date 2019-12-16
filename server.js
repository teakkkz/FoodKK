const express = require('express');
const app = express();
var AWS = require("aws-sdk");
const request = require('request');
var bodyParser = require('body-parser');
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  let awsConfig = {
    "region": "us-east-1",
    "endpoint": "http://localhost:8000",
    "accessKeyId": "ASIAUNG4TZLZAMWJ3EWO",
    "secretAccessKey": "SAICCRloRUFkfWSlQNhL42OjbuXZqTC7Azj7U55M",
    "sessionToken": "FwoGZXIvYXdzEBsaDHPis1FuIvrehUdd3SLIAQ3lTkXNbCab/OEoyNtFfpafTN0dtT48e0uz6w8sPEEkZc2RO/lyXZgC6btpuAOt14ogURpCYd7pFW9FO6qQf88ZnHzUTRVYT7mVHvihEJiVhi/hlGsSBvdW1th+L0UegLUq1geZG66Ab6LvEnEH7f++vmb+Td9DgNY0Q/MVvl4m246HI0Je+NkCyFDX7BqokAgOLB4O83Y2c0FecvtrhtV3rFy1kwP08tAaxxAySZIeBve+YAihs+8mv7qxaTmrH+UXUUqegqSDKNnq2e8FMi0qdikJo5RXeYgQH+O2AtRqDdn48SjsF18In5UNT0TbmIsP8e1IcyDOfU6/4CI="
  };
  AWS.config.update(awsConfig);


  function fetch() {

    let docClient = new AWS.DynamoDB.DocumentClient();
    var params = {
      TableName: "Food_List",

    };
    docClient.scan(params, function (err, data) {
      if (err) {
        console.log("users::save::error - " + JSON.stringify(err, null, 2));
      } else {
        console.log("users::save::success");
        res.render('index', {
          data: data
        })
      }
    });
  }
  fetch();
});
app.get('/add', function (req, res) {

  res.render('add');
});

app.get('/added', function (req, res) {
  console.log(req.query.id) ;
  let awsConfig = {
    "region": "us-east-1",
    "endpoint": "http://localhost:8000"
    };
  AWS.config.update(awsConfig);
  var docClient = new AWS.DynamoDB.DocumentClient();

  function add(){
    var params = {
      TableName: "Food_List",
      Item: {
        "id":req.query.id,
        "name":req.query.name,
        "price":req.query.price,
        "pic":req.query.pic
      }
    };
    docClient.put(params, function (err, data) {
      if (err) {
        console.error("Unable to add Car", req.query.price)+ ". Error JSON:", JSON.stringify(err, null, 2);
      } else {
        console.log("PutItem succeeded:", req.query.name);
      }
    });
  }
    add();
    
});
// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});