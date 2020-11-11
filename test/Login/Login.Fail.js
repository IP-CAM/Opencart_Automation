let dataUser = require("../../data/Datauser");
let {setWindowsSize, clearInput} = require("../../common/Utilities");
let login = require("../../pages/Login");

describe("Login Fail", () => {

    before(()=>{
        login.goToLogin();
        setWindowsSize(1920,1080);
    });

    it("Login with an invalid user", () => {
    login.setValueEmailInput(dataUser.dataUserRegister.email);
    login.setValuePassword(dataUser.dataUserRegister.password);
    login.clickLoginBtn();
    expect(login.getTextMessageWarning()).to.equal("Warning: No match for E-Mail Address and/or Password.");
    });

    it("Login with empty fields", ()=>{
    clearInput(login.emailInput);
    clearInput(login.passwordInput);
    login.clickLoginBtn();
    expect(login.getTextMessageWarning()).to.equal("Warning: No match for E-Mail Address and/or Password.");
    });

});