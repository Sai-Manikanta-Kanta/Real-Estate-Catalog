const express = require('express');
const app = express();
const cors = require("cors");
const bodyparse = require('body-parser');
require("dotenv").config();
const bodyParser = require('body-parser');

//middleware
app.use(express.json({ limit: "50mb" }));
app.use(
  express.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 })
);

app.use(bodyParser.json({limit: "50mb"}));
app.use(
    bodyparse.urlencoded({
        limit:"50mb",
        extended: true,
        parameterLimit: 50000
    })
);
app.use(cors());




module.exports = app;