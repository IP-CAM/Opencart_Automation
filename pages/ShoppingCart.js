let { getElementText, clickElement, verifyElementExist } = require("../common/Utilities");

class ShoppingCart {

    get shoppingCartBtn() { return $("#cart-total"); }
    get messageEmptyShoppingCart() { return $("#cart > ul > li > p"); }
    get tableProductShoppingCart() { return $("#cart > ul > li:nth-child(1) > table"); }
    get deleteProductShoppingCartBtn() { return $("#cart > ul > li:nth-child(1) > table > tbody > tr > td:nth-child(5) > button > i"); }
    get titleProductHome() { return $("#content > div.row > div:nth-child(1) > div > div.caption > h4"); }
    get titleProductShoppingCart() { return $("#cart > ul > li:nth-child(1) > table > tbody > tr > td.text-left > a"); }

    clickShoppingCartBtn() { clickElement(this.shoppingCartBtn); }

    verifyShoppingCartHasProduct() { return verifyElementExist(this.tableProductShoppingCart); }

    getTextMessageShoppingCartEmpty() { return getElementText(this.messageEmptyShoppingCart); }

    clickDeleteProductShoppingCartBtn() { clickElement(this.deleteProductShoppingCartBtn); }

    getTitleProductHome() { return getElementText(this.titleProductHome); }

    getTittleProductShoppingCart() { return getElementText(this.tittleProductShoppingCart); }
}

module.exports = new ShoppingCart();