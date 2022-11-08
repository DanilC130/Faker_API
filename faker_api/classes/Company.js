import { faker } from '@faker-js/faker';
// remember to use import and NOT require
// we can create a function to return a random / fake "Product"
const createCompany = () => {
    const Company = {
        _id: faker.datatype._id(),
        name: faker.companyName(),
        address: (faker.address.street(), + faker.address.city, + faker.address.state),

    };
    return Company;
};
    
const newCompany = createCompany();
console.log(newCompany);