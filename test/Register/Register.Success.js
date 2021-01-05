let utilities = require("../../common/Utilities");
let register = require("../../pages/Register");
let successRegister = require("../../pages/SuccessRegister");
let dataUser = require("../../Data/Datauser");

describe("Register module Success", () => {

    before(() => {
        register.gotoRegister();
        utilities.setWindowsSize(1980,1080);
    });

    it("Register a user", () => {
        register.setValueFirstNameInput(dataUser.getDataUserRegister().name);
        register.setValueLastNameInput(dataUser.getDataUserRegister().lastname);
        register.setValueEmailInput(dataUser.getDataUserRegister().email);
        register.setValuePhoneInput(dataUser.getDataUserRegister().phone);
        register.setValueAddresInput(dataUser.getDataUserRegister().address);
        register.setValueCityInput(dataUser.getDataUserRegister().city);
        register.setValuePostcodeInput(dataUser.getDataUserRegister().postcode);
        register.selectCountry();
        register.selectState();
        register.setValuePassword(dataUser.getDataUserRegister().password);
        register.setValueConfirmPassword(dataUser.getDataUserRegister().password);
        register.clickCheckBoxAgreePrivacyPolicy();
        register.clickContinueBtn();
        expect(successRegister.getTextSuccessMessage()).to.equal("Your Account Has Been Created!");
    });

});