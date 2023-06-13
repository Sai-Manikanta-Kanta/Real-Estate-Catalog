const express = require('express');
const app = express();
const cors = require("cors");
const bodyparse = require('body-parser');
require("dotenv").config();
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const {validateToken} = require("./middleware/token");
const propertyRoutes = require('./routes/properties')
const searchRoutes = require('./routes/searchRoutes');
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

app.use("/api/users",authRoutes);
app.use("/api/property",validateToken,propertyRoutes);
app.use('/api/search',searchRoutes);

module.exports = app;

// server application deployed link
// https://tenxmanikanta-syed-bindhu.onrender.com/