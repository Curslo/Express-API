import express from 'express';
import bodyparser from 'body-parser';

import userRouter from './Routes/users.js';

import postRouter from './Routes/posts.js'

import mongoose from 'mongoose';

mongoose.connect('mongodb+srv://richardkisivii:-U2PR5nfaS.XRMY@cluster0.ank6thj.mongodb.net/?retryWrites=true&w=majority')
.then(() => {
    console.log('Connected to database')
}).catch((err) => {
    console.log(err)
})
const app = express();
const PORT = 5000;

app.use(bodyparser.json());

app.set('view engine', 'ejs')

app.use('/users', userRouter )

app.use('/posts', postRouter)

app.get('/', (req, res) => {
   res.render('dashboard', {user: {name:"Peter", age: "40"}})
});

app.listen(PORT, () => 
console.log(`Server Running on port: http://localhost:${PORT}`));