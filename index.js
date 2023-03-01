import express from 'express';
import bodyparser from 'body-parser';

import userRouter from './Routes/users.js';

import postRouter from './Routes/posts.js'

const app = express();
const PORT = 5000;

app.use(bodyparser.json());

app.use('/users', userRouter )

app.use('/posts', postRouter)

app.get('/', (req, res) => {
   res.render('dashboard')
});

app.listen(PORT, () => 
console.log(`Server Running on port: http://localhost:${PORT}`));