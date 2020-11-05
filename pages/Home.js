let { clickElement, getElementText, goToUrl, setElementValue } = require("../common/Utilities");

class Home {

    get dropdownlistCurrency() { return $("#form-currency > div > button > span"); }
    get priceBox() { return $("#content > div.row > div:nth-child(1) > div > div.caption > p.price"); }
    get searchBar() { return $("#search > input"); }
    get searchBtn() { return $("#search > span > button"); }
    get addToCartBtn() { return $("#content > div.row > div:nth-child(1) > div > div.button-group > button:nth-child(1) > span") }

    goToHome() {
        goToUrl("/");
    }

    clickDropdownlistCurrency() { clickElement(this.dropdownlistCurrency); }

    selectOptionDropdownlistCurrency(numberOption) {
        var option = $(`#form-currency > div > ul > li:nth-child(${numberOption}) > button`);
        clickElement(option);
    }

    getPriceBoxText() { return getElementText(this.priceBox); }

    search(word) {
        setElementValue(this.searchBar, word);
        clickElement(this.searchBtn);
    }

    clickAddToCartBtn() { clickElement(this.addToCartBtn); }

}

module.exports = new Home();