let homepage = require("../pages/Home");

describe("Currency changes on the page", ()=>{

    before(()=>{
        homepage.goToHome();
        browser.setWindowSize(1920,1080);
    });

    beforeEach(()=>{
        homepage.clickDropdownlistCurrency();
    });

    it("Change currency to Euros", ()=>{
        homepage.selectOptionDropdownlistCurrency("1");
    });

    it("Change currency to Pound Sterling", ()=>{
        homepage.selectOptionDropdownlistCurrency("2");
    });

    it("Change currency to US Dollar", ()=>{
        homepage.selectOptionDropdownlistCurrency("3");
    });
})