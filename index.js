const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 5002;
const md5 = require('md5')
uri = process.env.MONGO_URI

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }
  );
const connection = mongoose.connection;
connection.once('open', ()=>{
  console.log("MONGO MONGO MONGO")
})

app.use(cors())
app.use(express.json())

const temp = md5("sdjfho323lkg345")

const userRoute = require('./routes/Users');
const quantumsRoute = require('./routes/Quantums')

app.use('/users', userRoute)

app.use('/quantums', quantumsRoute)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(md5(temp))
});
app.use((req, res)=>{
  res.send("hello")
})

