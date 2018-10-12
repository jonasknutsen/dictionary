var mongoose = require('mongoose')
var Schema = mongoose.Schema

var ArticleSchema = new Schema({
  word: String,
  partOfSpeech: String,
  meaning: [{
    text: String,
    example: String
  }],
  wordOfDay: Date,
  published: Boolean
})

module.exports = mongoose.model('Article', ArticleSchema)
