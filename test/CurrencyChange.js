let {setWindowsSize} = require("../common/Utilities");
let homepage = require("../pages/Home");

describe("Currency changes on the page", () => {

    before(() => {
        homepage.goToHome();
        setWindowsSize(1920, 1080);
    });

    beforeEach(() => {
        homepage.clickDropdownlistCurrency();
    });

    it("Change currency to Euros", () => {
        homepage.selectOptionDropdownlistCurrency("1");
        expect(homepage.getPriceBoxText()).to.include('€');
    });

    it("Change currency to Pound Sterling", () => {
        homepage.selectOptionDropdownlistCurrency("2");
        expect(homepage.getPriceBoxText()).to.include('£');
    });

    it("Change currency to US Dollar", () => {
        homepage.selectOptionDropdownlistCurrency("3");
        expect(homepage.getPriceBoxText()).to.include('$');
    });

})