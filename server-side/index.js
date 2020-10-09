const express = require('express')
const app = express()
const port = 5000


const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://volunteer:volunteer123@cluster0.vgs8p.mongodb.net/volunteer?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("volunteer").collection("volunteer-event");
 console.log('success');
  client.close();
});


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})









