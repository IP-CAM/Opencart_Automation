class Home {

    get dropdownlistCurrency() { return $("#form-currency > div > button > span"); }
    get priceBox() { return $("#content > div.row > div:nth-child(1) > div > div.caption > p.price"); }

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


}

module.exports = new Home();