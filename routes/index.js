let apis = require('./apis')

module.exports = (app) => {
  app.use('/api', apis)
  app.use('*', (req, res) => {
    res.status(404).json({
      message: 'This api does not exist, please refer to API doc for available apis.',
      data: null
    })
  })
}