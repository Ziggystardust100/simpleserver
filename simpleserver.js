const express = require('express')
const app = express()
var cors = require('cors');
const bodyParser = require('body-parser');
const port = 3002;
const mongo = require('./mongo')(app);

app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
)

let alldata = {};
app.use(bodyParser.json());
// app.get('/test', (req, res) => res.send({a:1}));

app.post('/addproduct', (req, res) => {
  const {body} = req;
  console.log('Got body:', body);
  app.db.collection('product').insertOne(body);
  res.send({ success: 13 });
});

app.get('/devicedata', (req, res) => {
  const p = req.query;
  debugger;

  alldata = {
    ...alldata,
    ...p
  }
  console.log(alldata);
  app.db.collection('test').insertOne(p);
  // read from db
  const myprod = app.db.collection('test').find({ userid: '4' }).toArray();

  myprod.then(v => {
    console.log('yyyyyyyyyyyyyyyyyyyy');
    setTimeout(() => {
      res.send({ data: 'device dsssssssssssssata', x: 1, products: v });
    }, 2000);

  });
  console.log('xxxxxxxxxxxxxxx');
  //res.send({ data: 'device dsssssssssssssata', x: 1, products: myprod });

});
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
