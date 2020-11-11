let {setWindowsSize} = require("../common/Utilities");
let homepage = require("../pages/Home");
let shoppingCart = require("../pages/ShoppingCart");


describe("Shopping cart module", () => {

    before(() => {
        homepage.goToHome();
        setWindowsSize(1920, 1080);
    })

    it("Add a product", () => {
        homepage.clickAddToCartBtn();
        shoppingCart.clickShoppingCartBtn();
        expect(shoppingCart.verifyShoppingCartHasProduct()).to.be.true;
    });

    it("Check the product added on the shopping cart is the right product", () => {
        expect(shoppingCart.getTitleProductHome()).to.equal(shoppingCart.getTittleProductShoppingCart());
    });


    it("Delete a product", () => {
        shoppingCart.clickDeleteProductShoppingCartBtn();
        shoppingCart.clickShoppingCartBtn();
        expect(shoppingCart.getTextMessageShoppingCartEmpty()).to.equal("Your shopping cart is empty!");
    })


})