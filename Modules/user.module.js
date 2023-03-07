//This is a 'user' model.
//Its currently used to define the user schema or how the user table should be on the database (mongodb).

//Import mongoose
import mongoose from "mongoose";

//Define how the user table takes data, and how it should be
const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    password: {type: String, required: true},
    email: {type: String, required: true}
})

//Assign variable 'User' to the userSchema described above 
const User = mongoose.model('User', userSchema);

//Export 'User' to be used by the controller
export default User