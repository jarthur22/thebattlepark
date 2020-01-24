const express = require('express');
const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://bpapp:bpapp123@cluster0-kxab2.mongodb.net/thebattleparkdb?retryWrites=true&w=majority';
const path = require('path');
const e4 = require('./routes/api/e4');
const members = require('./routes/api/members');
const tournaments = require('./routes/api/tournaments');

const app = express();
app.use(express.json());

//Use Routes
app.use('/api/e4', e4);
app.use('/api/members', members);
app.use('/api/tournaments', tournaments);

//connect to mongoDB
mongoose.connect(mongoURI, {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true, useFindAndModify: true})
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

/* app.get('/login', (req, res) => {
    //res.status(200).sendFile(__dirname, '/#/login/callback');
    res.status(200).redirect('http://localhost:3000/#/login/callback');
}); */


app.listen(port, () => console.log(`Server started on port ${port}`));