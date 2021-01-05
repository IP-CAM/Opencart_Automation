let utilities = require("../common/Utilities");
let homepage = require("../pages/Home");
let search = require("../pages/Search");

describe("search products with the search bar", () => {

    before(() => {
        homepage.goToHome();
        utilities.setWindowsSize(1920, 1080);
    });

    it("search a existing product ", () => {
        var word = "mac";
        homepage.search(word);
        expect(search.getTitle()).to.equal(`Search - ${word}`);
    })

    it("search a not existing product", () => {
        homepage.search("");
        expect(search.getMessageNotProductFound()).to.equal("There is no product that matches the search criteria.");
    })

});