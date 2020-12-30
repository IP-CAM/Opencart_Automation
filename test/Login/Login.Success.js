let dataUser = require("../../data/Datauser");
let utilities = require("../../common/Utilities");
let login = require("../../pages/Login");
let myAccount = require("../../pages/MyAccount");

describe("Login Success", () => {

    before(()=>{
        login.goToLogin();
        utilities.setWindowsSize(1920,1080);
    });

    it("Login with a user", () => {
    login.setValueEmailInput(dataUser.dataUserLogin.email);
    login.setValuePassword(dataUser.dataUserLogin.password);
    login.clickLoginBtn();
    expect(myAccount.getTitle()).to.equal("My Account");
    });

});