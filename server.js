const express = require('express')
const next = require('next')
const mongoose = require('mongoose')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/dorskordbok', { useNewUrlParser: true })

app.prepare()
  .then(() => {
    const server = express()

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(3003, (err) => {
      if (err) throw err
      console.log('> Ready on http://localhost:3003')
    })
  })
  .catch((ex) => {
    console.error(ex.stack)
    process.exit(1)
  })
