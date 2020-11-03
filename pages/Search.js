class Search {

    get resultSearchList() { return $("#content > div:nth-child(8)") }

    getTitle() { return browser.getTitle(); }

}

module.exports = new Search()