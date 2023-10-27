interface User{
    id: number;
    name: string;
}


const users = [
    {
        id:1,
        name:'Jhon Doe'
    },
    {
        id:2,
        name:'jhane Doe'
    }
];

const getUserById = ( id: number, callback: (err?: string, user?:User) => void ) => {
    
    const user = users.find( (user) => user.id === id );

    user ? callback(undefined, user) : callback(`USUARIO no encontrado ${id}`);
}

module.exports = {
    getUserById
}