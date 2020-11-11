let { getPageTitle } = require("../common/Utilities");

class MyAccount {

    getTitle() { return getPageTitle(); }

}

module.exports = new MyAccount();