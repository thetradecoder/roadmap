const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
// const mongo_uri = process.env.MONGO_URI;
require('dotenv');

const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

mongoose.connect()



app.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`);
})