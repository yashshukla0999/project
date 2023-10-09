const express = require('express');

const path = require('path');

const cors = require('cors')
const mongoose= require('mongoose');

const bodyParser = require('body-parser');

 const userRoutes = require('./route/user');

const app= express();



//middlewares
app.use(cors());

app.use(bodyParser.json());


 app.use('/user', userRoutes);




mongoose.connect('mongodb+srv://anshul:1234@cluster0.qvr9g2a.mongodb.net/Expenses?retryWrites=true&w=majority')
.then(()=>
{
    app.listen(3000);
    console.log("MONGODB CONNECTED");
})
.catch(err=>console.log(err));