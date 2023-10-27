

interface BuildMakerPersonOptions {
    getUUID: () => string;
    getAge: (birthdate:string) => number;
}

interface PersonOptions {
    name: string;
    birthdate: string;
}

export const buildMakePerson = ({ getUUID, getAge }: BuildMakerPersonOptions) => {

    return ({name, birthdate}: PersonOptions) => {
    
        return {
            id: getUUID(),
            name: name,
            birthdate: birthdate,
            age: getAge(birthdate),
        }
    }
}
