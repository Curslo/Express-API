//This is a user model.
//Its currently used to define the user schema or how the user table should be on the database (mongodb).

import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    password: {type: String, required: true},
    email: {type: String, required: true}
})

const User = mongoose.model('User', userSchema);

export default User