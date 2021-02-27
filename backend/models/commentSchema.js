const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const moment = require('moment');

const commentSchema = new Schema({
  name:{type:String},
  comment:{type:String}
},
{timestamps: true});


module.exports = mongoose.model('comment',commentSchema);
