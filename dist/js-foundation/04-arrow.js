"use strict";
const users = [
    {
        id: 1,
        name: 'Jhon Doe'
    },
    {
        id: 2,
        name: 'jhane Doe'
    }
];
const getUserById = (id, callback) => {
    const user = users.find((user) => user.id === id);
    user ? callback(undefined, user) : callback(`USUARIO no encontrado ${id}`);
};
module.exports = {
    getUserById
};
