const express = require("express");
const app = express();
const cors = require("cors");
const http = require("http");
const PORT = process.env.PORT || 3000;
const session = require("express-session");
const routes = require("./routes/index.js");
const socketService = require("./services/socketService");
const swaggerDoc = require("./swagger/swaggerDoc");

// if (process.env.NODE_ENV !== 'production') {
//   require('dotenv').config()
// }

// cors
app.use(cors());

// session
app.use(
  session({
    secret: "akpitdx",
    resave: false,
    saveUninitialized: true,
  })
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// use passport
const passport = require("./config/passport");
app.use(passport.initialize());
app.use(passport.session());

// locals
app.use((req, res, next) => {
  res.locals.user = req.user;
  next();
});

// api doc
swaggerDoc(app);

// routes
routes(app);

// socket
const server = http.createServer(app);
socketService(server);

server.listen(PORT, () => {
  console.log(`Node server is listening on port ${PORT}`);
});
