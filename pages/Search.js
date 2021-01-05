let utilities = require("../common/Utilities");

class Search {

    get messageNotProductFound() { return $("#content > p:nth-child(7)") }

    getTitle() { return utilities.getPageTitle(); }

    getMessageNotProductFound() { return utilities.getElementText(this.messageNotProductFound); }

}

module.exports = new Search();