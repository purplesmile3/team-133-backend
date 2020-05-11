const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
  comment: { type: String, required: true },
  author: { type: String, required: true },
  userId: { type: String, required: true },
  dateCreated: { type:Date, required: true}
});

module.exports = mongoose.model('Comment', commentSchema);