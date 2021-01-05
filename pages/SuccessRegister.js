let utilities = require("../common/Utilities");

class SuccessRegister {

    get successMessage() { return $("#content > h1"); }

    getTextSuccessMessage() { return utilities.getElementText(this.successMessage); }

}

module.exports = new SuccessRegister();