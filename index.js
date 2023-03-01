import express from 'express';
import bodyparser from 'body-parser';

import userRouter from './Routes/users.js';

import postRouter from './Routes/posts.js'

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