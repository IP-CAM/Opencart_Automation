let utilities = require("../common/Utilities");

class MyAccount {

    getTitle() { return utilities.getPageTitle(); }

}

module.exports = new MyAccount();