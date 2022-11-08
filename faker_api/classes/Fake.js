const faker = require('@faker-js/faker');
// import { faker } from '@faker-js/faker';

class Fake {
    constructor() {
        this.phrase = faker.hacker.phrase();
    }
}

module.exports = Fake;