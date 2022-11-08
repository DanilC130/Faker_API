import { faker } from '@faker-js/faker';
// remember to use import and NOT require
// we can create a function to return a random / fake "Product"
const createUser = () => {
    const User = {
        email: faker.internet.email(),
        password: faker.internet.password(),
        phoneNumber: faker.faker.phoneNumber(),
        lastName: faker.person.firstName(),
        firstName: faker.person.lastName(),
        _id: faker.datatype._id(),


    };
    return User;
};

const newUser = createUser();
console.log(newUser);