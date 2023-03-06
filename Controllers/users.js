//This is a user controller which acts as an interface between between the model and the view componets.
//Importing 'User' from the user Model
import User from '../Modules/user.module.js'

//Variable 'create' is assignrd to a function that takes 'user' as an argument.
//Variable 'newUser' is assigned to the 'User' module with the argument 'user' 
//'newUser.Save' saves the record 'that have been inserted by the client' to mongodb through the 'user.module.js' model 
//The new user details are returned after the new user has been saved incuding the userid.
export const create = (user) => {
    const newUser = User(user)
    newUser.save()
    return newUser;
}

export const update = (userId) => {
    console.log('User')
    return user;
}


export const remove = (userId) => {
    console.log('User has been deleted')
    return user;
}

export const findById = (userId) => {
    console.log('User')
    return user;
}
export const findAll = (user) => {
    console.log('Users')
    return user;
}