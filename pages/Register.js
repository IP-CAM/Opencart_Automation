let utilities = require("../common/Utilities");

class Register {

    get firstNameInput() { return $("#input-firstname"); }
    get lastNameInput() { return $("#input-lastname"); }
    get emailInput() { return $("#input-email"); }
    get phoneInput() { return $("#input-telephone"); }
    get addressInput() { return $("#input-address-1"); }
    get cityInput() { return $("#input-city"); }
    get postcodeInput() { return $("#input-postcode"); }
    get countryListInput() { return $("#input-country"); }
    get selectedOptionCountry() { return $("#input-country > option:nth-child(108)"); }
    get stateListInput() { return $("#input-zone"); }
    get selectedOptionState() { return $("#input-zone > option:nth-child(23)"); }
    get passwdInput() { return $("#input-password"); }
    get confirmPasswdInput() { return $("#input-confirm"); }
    get checkboxPrivacyPolicy() { return $("#content > form > div > div > input[type=checkbox]:nth-child(2)"); }
    get continueBtn() { return $("#content > form > div > div > input.btn.btn-primary"); }
    get classTextmessageError() { return $(".text-danger"); }

    gotoRegister() { utilities.goToUrl("/index.php?route=account/register"); }

    /**
     * @param {string} firstname Firstname of the user  
     * */
    setValueFirstNameInput(firstname) { utilities.setElementValue(this.firstNameInput, firstname); }

    /**
     * @param {string} lastname Lastname of the user  
     * */
    setValueLastNameInput(lastname) { utilities.setElementValue(this.lastNameInput, lastname); }

    /**
     * @param {string} email email of the user  
     * */
    setValueEmailInput(email) { utilities.setElementValue(this.emailInput, email); }

    /**
     * @param {string} phone number phone of the user  
     * */
    setValuePhoneInput(phone) { utilities.setElementValue(this.phoneInput, phone); }

    /**
     * @param {string} address address of the user  
     * */
    setValueAddresInput(address) { utilities.setElementValue(this.addressInput, address); }

    /**
     * @param {string} city name of the city of the user  
     * */
    setValueCityInput(city) { utilities.setElementValue(this.cityInput, city); }

    /**
     * @param {string} postcode postcode of the user  
     * */
    setValuePostcodeInput(postcode) { utilities.setElementValue(this.postcodeInput, postcode); }

    selectCountry() {
        utilities.clickElement(this.countryListInput);
        utilities.clickElement(this.selectedOptionCountry);
    }

    selectState() {
        utilities.clickElement(this.stateListInput);
        utilities.clickElement(this.selectedOptionState);
    }

    /**
     * @param {string} password the password of the user  
     * */
    setValuePassword(password) { utilities.setElementValue(this.passwdInput, password); }

    /**
     * @param {string} password password of the user  
     * */
    setValueConfirmPassword(password) { utilities.setElementValue(this.confirmPasswdInput, password); }

    clickCheckBoxAgreePrivacyPolicy() { utilities.clickElement(this.checkboxPrivacyPolicy); }

    clickContinueBtn() { utilities.clickElement(this.continueBtn); }

    verifyPageHasMessageError() { return utilities.verifyElementExist(this.classTextmessageError); }

}

module.exports = new Register();