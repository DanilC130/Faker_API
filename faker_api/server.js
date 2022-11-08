const express = require('express');
const Fake = require('./classes/Fake');
const app = express();
const { faker } = require('@faker-js/faker');

const port = 8008;


// make sure these lines are above any app.get or app.post code blocks
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Both express.urlencoded() and express.json() are Express middleware functions. They are responsible for providing and parsing the request.body data.


const createCompany = () => {
    const Company = {
        userId: faker.datatype.uuid(),
        name: faker.company.name(),
        address: [faker.address.street(), faker.address.city(), faker.address.state(), faker.address.zipCode(), faker.address.country()],

    };
    return Company;
};

const newCompany = createCompany();
console.log(newCompany);



const createUser = () => {
    const User = {
        email: faker.internet.email(),
        password: faker.internet.password(),
        phoneNumber: faker.phone.number(),
        lastName: faker.name.firstName(),
        firstName: faker.name.lastName(),
        userId: faker.datatype.uuid(),


    };
    return User;
};

const newUser = createUser();
console.log(newUser);


app.get("/api/users/new", (req, res) => {
    console.log(faker.name.lastName())
    res.json( newUser );
})

app.get("/api/user/company", (req, res) => {
    res.json({User: newUser, Company: newCompany}, )

})

// const User = [
//     { firstName: "Reimu", lastName: "Hakurei" },
//     { firstName: "Marisa", lastName: "Kirisame" },
//     { firstName: "Sanae", lastName: "Kochiya" },
//     { firstName: "Sakuya", lastName: "Izayoi" },
//     { firstName: "Momiji", lastName: "Inubashiri" },
// ];

// app.post("/api/users", (req, res) => {
//     // req.body will contain the form data from Postman or from React
//     console.log(req.body);
//     // we can push it into the users array for now...
//     // later on this will be inserted into a database
//     users.push(req.body);
//     // we always need to respond with something
//     res.json( { status: "ok" } );
// });

//this is what displays the users
// app.get("/api/users", (req, res) => {
//     res.json( users );
// });


//GETTING DATA from a URL
// we want to get a user with a specific id, so we make the id a part of the url
// we make sure to preface the id variable with a `:` colon so as to pass the data via URL. It will then be available in the req.params object.
// app.get("/api/users/:id", (req, res) => {
//     // we can get this `id` variable from req.params
//     console.log(req.params.id);
//     // assuming this id is the index of the users array we could return one user this way
//     res.json( users[req.params.id] );
// });

//UPDATE DATA
// updating data using a put request:
// app.put("/api/users/:id", (req, res) => {
//     // we can get this `id` variable from req.params
//     const id = req.params.id;
//     // assuming this id is the index of the users array we can replace the user like so
//     users[id] = req.body;
//     // we always need to respond with something
//     res.json( { status: "ok" } );
// });


//DELETE DATA
//deleting data using a delete request
// app.delete("/api/users/:id", (req, res) => {
//     // we can get this `id` variable from req.params
//     const id = req.params.id;
//     // assuming this id is the index of the users array we can remove the user like so
//     users.splice(id, 1);
//     // we always need to respond with something
//     res.json( { status: "ok" } );
// });





app.listen(8008, () => {
    console.log("Running on port 8008");
});