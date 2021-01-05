let Chance = require("chance");
let chance = new Chance();

class DataUser {
  getDataUserRegister() {
    var dataUserRegister = {
      name: chance.first(),
      lastname: chance.last(),
      email: chance.email({ domain: "gmail.com" }),
      phone: chance.phone(),
      address: chance.address(),
      city: chance.city(),
      postcode: chance.postcode(),
      password: chance.string(),
    };
    return dataUserRegister;
  }
  
  getDataUserLogin() {
    var dataUserLogin = {
      email: "prueba@yopmail.com",
      password: "prueba123",
    };

    return dataUserLogin;
  }
}

module.exports = new DataUser();
