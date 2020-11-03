class Search {

    get messageNotProductFound() {return $("#content > p:nth-child(7)")}

    getTitle() { return browser.getTitle(); }
    
    getMessageNotProductFound(){ return this.messageNotProductFound.getText();}

}

module.exports = new Search();