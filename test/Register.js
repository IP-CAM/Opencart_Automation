let dataUser = require("../Data/Datauser");
let {setWindowsSize} = require("../common/Utilities");
let register = require("../pages/Register");
let successRegister = require("../pages/SuccessRegister");


describe("Register module", () => {

    before(() => {
        register.gotoRegister();
        setWindowsSize(1980,1080);
    });

    it("Register a user", () => {
        register.setValueFirstNameInput(dataUser.dataUserRegister.name);
        register.setValueLastNameInput(dataUser.dataUserRegister.lastname);
        register.setValueEmailInput(dataUser.dataUserRegister.email);
        register.setValuePhoneInput(dataUser.dataUserRegister.phone);
        register.setValueAddresInput(dataUser.dataUserRegister.address);
        register.setValueCityInput(dataUser.dataUserRegister.city);
        register.setValuePostcodeInput(dataUser.dataUserRegister.postcode);
        register.selectCountry();
        register.selectState();
        register.setValuePassword(dataUser.dataUserRegister.password);
        register.setValueConfirmPassword(dataUser.dataUserRegister.password);
        register.clickCheckBoxAgreePrivacyPolicy();
        register.clickContinueBtn();
        expect(successRegister.getTextSuccessMessage()).to.equal("Your Account Has Been Created!");
    });

    it("Register a user with empty fields", ()=>{
        register.gotoRegister();
        register.clickCheckBoxAgreePrivacyPolicy();
        register.clickContinueBtn();
        expect(register.verifyPageHasMessageError()).to.be.true;
    });


});