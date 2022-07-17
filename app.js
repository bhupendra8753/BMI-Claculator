const express = require('express');
const app = express();
const logger = require('./services/loggerService');
const bodyParser = require('body-parser');
const path = './development.env';
const bmiController = require("./controller/bmiController");


require('dotenv').config({ path });
// App settings
app.use(express.urlencoded({
  extended: false
}));
app.use(express.json());


// Route
app.post('/bmi', bmiController.bmiCaluator);



// Server port
const { PORT } = process.env;

app.listen(PORT, () => {
  logger.info(`Server is up and running at ${PORT}`)
});

module.exports = app;