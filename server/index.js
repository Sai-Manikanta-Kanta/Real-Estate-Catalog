// server starting folder
const app = require('./app');
const mongoose = require('mongoose');
const dotenv = require('dotenv')
dotenv.config({path:'./.env'})
const port = process.env.port || 5000
mongoose.connect(process.env.MONGOURI,).then(()=>{
    console.log("mongodb connected successfully ");
}).catch(()=>{
    console.log("Failed to connect to database of mongodb");
});



app.listen(port, () => console.log(`App listening on port ${port}!`));