let { getElementText, getPageTitle } = require("../common/Utilities");

class Search {

    get messageNotProductFound() { return $("#content > p:nth-child(7)") }

    getTitle() { return getPageTitle(); }

    getMessageNotProductFound() { return getElementText(this.messageNotProductFound); }

}

module.exports = new Search();