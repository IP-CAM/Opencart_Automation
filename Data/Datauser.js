let Chance = require("chance");
let chance = new Chance();

class DataUser {
    
     dataUserRegister = {
        name: chance.first(),
        lastname: chance.last(),
        email: chance.email({domain: 'yopmail.com'}),
        phone: chance.phone(),
        address: chance.address(),
        city: chance.city(),
        postcode: chance.postcode(),
        password: chance.string()
    };
    
}

module.exports = new DataUser();



