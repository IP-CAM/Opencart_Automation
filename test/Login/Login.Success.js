let utilities = require("../../common/Utilities");
let login = require("../../pages/Login");
let myAccount = require("../../pages/MyAccount");
let dataUser = require("../../Data/Datauser");

describe("Login Success", () => {

    before(()=>{
        login.goToLogin();
        utilities.setWindowsSize(1920,1080);
    });

    it("Login with a user", () => {
    login.setValueEmailInput(dataUser.getDataUserLogin().email);
    login.setValuePassword(dataUser.getDataUserLogin().password);
    login.clickLoginBtn();
    expect(myAccount.getTitle()).to.equal("My Account");
    });

});