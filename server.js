const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
const routes = require("./controllers");
const helpers = require("./utils/helpers");

//New package
const multer = require("multer");

// import db connection
const sequelize = require("./config/connection");

// create express server, set port
const app = express();
const PORT = process.env.PORT || 3001;

// handlebars configurations, inform express
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

// serve static files/import css with direct path
app.use(express.static(path.join(__dirname, "Public")));

// connect to routes in 'controller' folder
app.use(routes);

// sync sequelize models to db and start server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}`));
});
