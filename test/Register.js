const { expect } = require("chai");
let {setWindowsSize} = require("../common/Utilities");
let register = require("../pages/Register");
let successRegister = require("../pages/SuccessRegister");

describe("Register module", () => {

    before(() => {
        register.gotoRegister();
        setWindowsSize(1980,1080);
    });

    it("Register a user", () => {
        register.setValueFirstNameInput("Nancy");
        register.setValueLastNameInput("Diaz");
        register.setValueEmailInput("Nu@yopmail.com");
        register.setValuePhoneInput("302-323-2322");
        register.setValueAddresInput("Mario Brother Street #43");
        register.setValueCityInput("London");
        register.setValuePostcodeInput("NA 3421");
        register.selectCountry();
        register.selectState();
        register.setValuePassword("1234");
        register.setValueConfirmPassword("1234");
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