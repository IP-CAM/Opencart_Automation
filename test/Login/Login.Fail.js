let utilities = require("../../common/Utilities");
let login = require("../../pages/Login");
let dataUser = require("../../Data/Datauser");

describe("Login Fail", () => {

    before(()=>{
        login.goToLogin();
        utilities.setWindowsSize(1920,1080);
    });

    it("Login with an invalid user", () => {
    login.setValueEmailInput(dataUser.getDataUserLogin.email);
    login.setValuePassword(dataUser.getDataUserLogin.password);
    login.clickLoginBtn();
    expect(login.getTextMessageWarning()).to.equal("Warning: No match for E-Mail Address and/or Password.");
    });

    it("Login with empty fields", ()=>{
    utilities.clearInput(login.emailInput);
    utilities.clearInput(login.passwordInput);
    login.clickLoginBtn();
    expect(login.getTextMessageWarning()).to.equal("Warning: No match for E-Mail Address and/or Password.");
    });

});