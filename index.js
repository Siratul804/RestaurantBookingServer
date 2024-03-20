const express = require('express')
const app = express()
const port = 3000

const env = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
env.config();

//middlewares
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(cors());

//routes
app.use("/api", require("./routes/test"));
app.use("/api/restaurant", require("./routes/restaurant"));


//mongodb_connect
mongoose
  .connect(
`mongodb+srv://islamsiratul:${process.env.USER_PASS}@cluster0.io3aptu.mongodb.net/${process.env.USER_NAME}?retryWrites=true&w=majority&appName=Cluster0`)
  .then(() => {
    console.log("Database connected !!! ");
  });


app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

