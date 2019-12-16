var AWS = require("aws-sdk");
AWS.config.update({
  region: "us-east-1",
  endpoint: "http://localhost:8000"
});
var docClient = new AWS.DynamoDB.DocumentClient()
var table = "Food_List";
var params = {
    TableName: "Food_List",
    ProjectionExpression: "#id, #name, #price,#pic",
    ExpressionAttributeNames: {
        "#id": "id",
        "#name": "name",
        "price":"price",
        "pic":"pic"
    }
};
console.log("Scanning Cars table.");
docClient.scan(params, onScan);

function onScan(err, data) {
    if (err) {
        console.error("Unable to scan the table. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        res.send(data)
        // print all the Cars
        console.log("Scan succeeded.");
        data.Items.forEach(function(car) {
           console.log(car.id, car.type, car.name)
        });
if (typeof data.LastEvaluatedKey != "undefined") {
            console.log("Scanning for more...");
            params.ExclusiveStartKey = data.LastEvaluatedKey;
            docClient.scan(params, onScan);
        }
    }
  }
