let { getElementText } = require("../common/Utilities");

class SuccessRegister {

    get successMessage() { return $("#content > h1"); }

    getTextSuccessMessage() { return getElementText(this.successMessage); }

}

module.exports = new SuccessRegister();