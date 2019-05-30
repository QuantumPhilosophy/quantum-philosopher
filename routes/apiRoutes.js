'use strict'

module.exports = function (app) {
  app.get('/api', function (req, res) {
    res.json('Welcome to Quantum Philosophy API')
  })
}
