if(process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
const cors = require('cors')
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose'); 
const commentSchema = require('./models/commentSchema.js');

mongoose.connect(`mongodb+srv://russell:9DLE9MmI4fVkNIS2@cluster0.fi7th.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,{useNewUrlParser: true})
const db = mongoose.connection;
db.on('error', error => console.error(error));
db.once('open', () => {console.log('connected to mongoose')});

app.listen(process.env.PORT || 4000,() => {
  console.log('listening on port')
});
app.use(cors());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.post('/', async (req, res) => {
  console.log(req.body);
  let commentObj = req.body;

let comment1 = new commentSchema(commentObj);
 
// save model to database
comment1.save(function (err, comment) {
  if (err) return console.error(err);
  console.log(comment.comment + " saved to comment collection.");

});

  const docs = await commentSchema.find({}).sort({createdAt: -1});
  res.json(docs);
})

app.get('/',async (req, res) => {
  const docs = await commentSchema.find({}).sort({createdAt: -1});
  console.log('hit');
  res.json(docs);
})



 