const express = require('express');
const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://bpapp:bpapp123@cluster0-kxab2.mongodb.net/test?retryWrites=true&w=majority';
const path = require('path');
const e4 = require('./routes/api/e4');

const app = express();
app.use(express.json());

//USe Routes
app.use('/api/e4', e4);

//connect to mongoDB
mongoose.connect(mongoURI, {useNewUrlParser: true, useCreateIndex: true, useFindAndModify: true})
.then(() => console.log('MongoDB connected..'))
.catch(err => console.log(err));



//Serve static assets if in production
if(process.env.NODE_ENV === 'production'){
    //set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const port = process.env.PORT || 4000;


app.listen(port, () => console.log(`Server started on port ${port}`));

