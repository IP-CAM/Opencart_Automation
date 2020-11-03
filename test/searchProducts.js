const { expect } = require("chai");
let homepage = require("../pages/Home");
let search = require("../pages/Search");

describe("search products with the search bar", () => {

    before(() => {
        homepage.goToHome();
        browser.setWindowSize(1920, 1080);
    });

    it("search a product", () => {
        var word = "mac";
        homepage.search(word);
        expect(search.getTitle()).to.equal(`Search - ${word}`);
    })

});