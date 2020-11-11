let {setWindowsSize} = require("../../common/Utilities");
let register = require("../../pages/Register");

describe("Register module Failed", () => {

    before(() => {
        register.gotoRegister();
        setWindowsSize(1980,1080);
    });

    it("Register a user with empty fields", ()=>{
        register.clickCheckBoxAgreePrivacyPolicy();
        register.clickContinueBtn();
        expect(register.verifyPageHasMessageError()).to.be.true;
    });

});