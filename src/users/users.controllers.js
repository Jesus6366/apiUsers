const usersDB = []

let id = 1


const findAllUsers = () => {
    return usersDB
}

const findUsersByID = (id) => {
    const user = usersDB.find(item => item.id == id)
    return user
}

const creatUser = (obj) => {
    const newUser = {
        id: id++,
        first_name: obj.first_name,
        last_name: obj.last_name,
        email: obj.email,
        password: obj.password,
        birthday: obj.birthday
    }
    usersDB.push(newUser)
    return newUser
}


module.exports = {
    findAllUsers,
    findUsersByID,
    creatUser
}