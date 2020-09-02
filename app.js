const express = require('express')
const app = express()
const cors = require('cors')
const PORT = process.env.PORT || 3000
const session = require('express-session')
const routes = require('./routes/index.js')

// cors
app.use(cors())

// session
app.use(session({
  secret: 'akpitdx',
  resave: false,
  saveUninitialized: true
}))

app.use(express.json())

// locals
app.use((req, res, next) => {
  res.locals.user = req.user
  next()
})

// routes
routes(app)

app.listen(PORT, () => {
  console.log(`Node server is listening on port ${PORT}`)
})