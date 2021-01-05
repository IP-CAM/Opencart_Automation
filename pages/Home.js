let utilities = require("../common/Utilities");

class Home {

    get dropdownlistCurrency() { return $("#form-currency > div > button > span"); }
    get priceBox() { return $("#content > div.row > div:nth-child(1) > div > div.caption > p.price"); }
    get searchBar() { return $("#search > input"); }
    get searchBtn() { return $("#search > span > button"); }
    get addToCartBtn() { return $("#content > div.row > div:nth-child(1) > div > div.button-group > button:nth-child(1) > span") }

    goToHome() {
        utilities.goToUrl("/");
    }

    clickDropdownlistCurrency() { utilities.clickElement(this.dropdownlistCurrency); }

    /**
    * @param {string} numberOption number of the potition of the option on the dropdown List
    */
    selectOptionDropdownlistCurrency(numberOption) {
        var option = $(`#form-currency > div > ul > li:nth-child(${numberOption}) > button`);
        utilities.clickElement(option);
    }

    getPriceBoxText() { return utilities.getElementText(this.priceBox); }

    /**
    * @param {string} word value to be written on the element
    */
    search(word) {
        utilities.setElementValue(this.searchBar, word);
        utilities.clickElement(this.searchBtn);
    }

    clickAddToCartBtn() { utilities.clickElement(this.addToCartBtn); }

}

module.exports = new Home();