class Home {

    get dropdownlistCurrency() { return $("#form-currency > div > button > span"); }
    get priceBox() { return $("#content > div.row > div:nth-child(1) > div > div.caption > p.price"); }
    get searchBar() {return $("#search > input");}
    get searchButton() {return $("#search > span > button");}

    goToHome() {
        browser.url("/");
    }

    clickDropdownlistCurrency() {
        this.dropdownlistCurrency.waitForDisplayed();
        this.dropdownlistCurrency.click();
    }

    selectOptionDropdownlistCurrency(numberOption) {
        var option = $(`#form-currency > div > ul > li:nth-child(${numberOption}) > button`);
        option.waitForDisplayed();
        option.click();
    }

    getPriceBoxText() {
        this.priceBox.waitForDisplayed();
        return this.priceBox.getText();
    }

    search(word){
        this.searchBar.waitForDisplayed();
        this.searchBar.setValue(word);
        this.searchButton.click();
    }

}

module.exports = new Home();