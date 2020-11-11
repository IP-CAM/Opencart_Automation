let { goToUrl, setElementValue, clickElement, getElementText } = require("../common/Utilities");

class Login {

    get emailInput() { return $("#input-email"); }
    get passwordInput() { return $("#input-password"); }
    get loginBtn() { return $("#content > div > div:nth-child(2) > div > form > input"); }
    get messageWarning() { return $("body > div:nth-child(4) > div.alert.alert-danger"); }

    goToLogin() { goToUrl("/index.php?route=account/login"); }

    /**
     * @param {string} email email of the user  
     * */
    setValueEmailInput(email) { setElementValue(this.emailInput, email); }
    /**
     * @param {string} password the password of the user  
     * */
    setValuePassword(password) { setElementValue(this.passwordInput, password); }

    clickLoginBtn() { clickElement(this.loginBtn); }

    getTextMessageWarning() { return getElementText(this.messageWarning); }

}

module.exports = new Login();