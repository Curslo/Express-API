//Import the express module
import express from 'express';

//Import the body-parser module
import bodyparser from 'body-parser';

//Import userRouter module from the directory given 
import userRouter from './Routes/users.js';

//Import postRouter module from the directory given
import postRouter from './Routes/posts.js'

//Import the mongoose module
import mongoose from 'mongoose';

import path from 'path';

import expressEjsLayouts from 'express-ejs-layouts';

//Connect mongoose to the mongodb account
//Handle error if connection is succesful or not
mongoose.connect('mongodb+srv://richardkisivii:-U2PR5nfaS.XRMY@cluster0.ank6thj.mongodb.net/?retryWrites=true&w=majority')
.then(() => {
    console.log('Connected to database')
}).catch((err) => {
    console.log(err)
})

//Initiate and assign express() to the 'app' variable
const app = express();

//Assign variable PORT to the value'5010'
const PORT = 5010;

//Tell express to use 'bodyparse.json()' to handle nad access req.body within routes
app.use(bodyparser.json());

//..........................
app.use(bodyparser.urlencoded({ extended: true }))

//Tell express to set the 'View engine' to 'ejs'
app.set('view engine', 'ejs')

//Tell express to get 'signUp' page
app.get('/signUp', (req, res) => {return res.render('Users/signUp')})

//Tell express to get 'logIn' page
app.get('/login', (req, res) => {return res.render('logIn')})

//Tell express to use 'userRoutes' in the './user' directory
app.use('/users', userRouter )

//Tell express to use 'postRoutes' in the './posts' directory
app.use('/posts', postRouter)

app.use(express.static("public"))

app.use(expressEjsLayouts)

app.set("layout", "/views/layout.ejs")


app.get('/', (req, res) => {
   res.render('dashboard', {user: {name:"Peter", age: "40"}})
});

//listen for client request through the port specified with the variable 'PORT'
//Return 'Server Running on port: http://localhost:${PORT}' message on the console
app.listen(PORT, () => 
console.log(`Server Running on port: http://localhost:${PORT}`));