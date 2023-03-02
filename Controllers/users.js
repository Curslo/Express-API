import User from '../Modules/user.module.js'

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