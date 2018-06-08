const express = require('express')

const bodyparser = require('body-parser')


const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
 
// Connection URL
const url = 'mongodb://rampage:Ram123ram@ds247830.mlab.com:47830/theater';
 
// Database Name
const dbName = 'RAMPAGE';
 
// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");
 
  const db = client.db(dbName);
 
  client.close();
});


MongoClient.connect(url, function(err, client) {
  if (err) throw err;
  const Database = client.db("theater");
  //Find the first document in the theater collection:
  Database.collection("RAMPAGE").findOne({}, function(err, result) {
    if (err) throw err;
    console.log(result.name);
    console.log(result.age);
    client.close();
  });
});

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("theater");
    var myobj = { name: "Company Inc", address: "Highway 27" };
    dbo.collection("RAMPAGE").insertOne(myobj, function(err, res) {
      if (err) throw err;
      console.log("1 document inserted");
      db.close();
    });
  });

  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("theater");
    var myquery = { address: 'Highway 27' };
    dbo.collection("RAMPAGE").deleteOne(myquery, function(err, obj) {
      if (err) throw err;
      console.log("1 document deleted");
      db.close();
    });
  });


  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("theater");
    var myquery = { address: "Valley 345" };
    var newvalues = { $set: { name: "Michael", address: "Canyon 123" } };
    dbo.collection("RAMPAGE").updateOne(myquery, newvalues, function(err, res) {
      if (err) throw err;
      console.log("1 document updated");
      db.close();
    });
  });





const app = express()

app.use(bodyparser.json());



app.get('/employees', (req, res) => res.send('Hello World!'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))


app.post("/addemployee",function(req, res){
    console.log(req.body);
    let employee = [{name: 'jonny', city: 'Dallas'}, {name: 'poppy', city: 'Dallas'}];
    employees.push(employee);
    console.log(req.headers);
    res.send(employee);
})

app.delete("/employees", function(req, res){
    employees.pop();
    res.send(employees);
})

