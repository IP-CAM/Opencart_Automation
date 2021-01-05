let utilities = require("../common/Utilities");

class ShoppingCart {

    get shoppingCartBtn() { return $("#cart-total"); }
    get messageEmptyShoppingCart() { return $("#cart > ul > li > p"); }
    get tableProductShoppingCart() { return $("#cart > ul > li:nth-child(1) > table"); }
    get deleteProductShoppingCartBtn() { return $("#cart > ul > li:nth-child(1) > table > tbody > tr > td:nth-child(5) > button > i"); }
    get titleProductHome() { return $("#content > div.row > div:nth-child(1) > div > div.caption > h4"); }
    get titleProductShoppingCart() { return $("#cart > ul > li:nth-child(1) > table > tbody > tr > td.text-left > a"); }

    clickShoppingCartBtn() { utilities.clickElement(this.shoppingCartBtn); }

    verifyShoppingCartHasProduct() { return utilities.verifyElementExist(this.tableProductShoppingCart); }

    getTextMessageShoppingCartEmpty() { return utilities.getElementText(this.messageEmptyShoppingCart); }

    clickDeleteProductShoppingCartBtn() { utilities.clickElement(this.deleteProductShoppingCartBtn); }

    getTitleProductHome() { return utilities.getElementText(this.titleProductHome); }

    getTittleProductShoppingCart() { return utilities.getElementText(this.titleProductShoppingCart); }
}

module.exports = new ShoppingCart();