// controllers/article
var mongoose = require('mongoose')
var Article = mongoose.model('Article')

exports.getArticles = function (req, res) {
  Article.find({ published: true }, function (err, articles) {
    if (err) {
      return res.status(200).json({ success: false, message: err })
    } else {
      return res.status(200).json({ success: true, message: 'Articles found', articles })
    }
  })
}

exports.getArticle = function (req, res) {
  Article.findOne({ id: req.query.id }, function (err, article) {
    if (err) {
      return res.status(200).json({ success: false, message: err })
    } else {
      return res.status(200).json({ success: true, message: 'Article found', article })
    }
  })
}

exports.addArticle = function (req, res) {
  var article = new Article()

  article.word = req.body.word
  article.meaning = req.body.meaning
  article.wordOfDay = req.body.wordOfDay
  article.published = req.body.published

  article.save(function (err, data) {
    if (err) {
      return res.status(200).json({ success: false, message: err })
    } else {
      return res.status(201).json({ success: true, message: 'Article added', data })
    }
  })
}

exports.updateArticle = function (req, res) {
  Article.findByIdAndUpdate(req.params.article_id, { $set: req.body.update }, function (err, article) {
    if (err) {
      return res.status(200).json({ success: false, message: err })
    } else {
      return res.status(200).json({ success: true, message: 'Article updated', article })
    }
  })
}

exports.deleteArticle = function (req, res) {
  Article.findByIdAndRemove(req.params.article_id, function (err, result) {
    if (err) {
      return res.status(200).json({ success: false, message: err })
    } else {
      return res.status(200).json({ success: true, message: 'Artcle deleted', result })
    }
  })
}
