
const User = require('../../database/models').User
const Role = require('../../database/models').Role

function createUser(args) {

    const user = User.create(args)

    return Promise.resolve(user)
}

async function loadUser(id){

}

async function loadUsers() {

    return await User.findAll({
        attributes: ['first_name', 'last_name', 'roles'],
        limit: 100,
    });

    //return Promise.resolve(data)
}


module.exports = {
    createUser,
    loadUsers
}
