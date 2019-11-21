const express = require('express');
const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://bpapp:bpapp123@cluster0-kxab2.mongodb.net/test?retryWrites=true&w=majority';

const app = express();

//connect to mongoDB
mongoose.connect(mongoURI, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: true})
    .then(() => console.log('MongoDB connected..'))
    .catch(err => console.log(err));

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Server started on port ${port}`));

