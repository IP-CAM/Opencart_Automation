class Home {

    get dropdownlistCurrency() {return $("#form-currency > div > button > span");}

    goToHome(){
        browser.url("/");
    }
    
    clickDropdownlistCurrency(){
        this.dropdownlistCurrency.waitForDisplayed();
        this.dropdownlistCurrency.click();
    }

    selectOptionDropdownlistCurrency(numberOption){
        var option = $(`#form-currency > div > ul > li:nth-child(${numberOption}) > button`);
        option.waitForDisplayed();
        option.click();

    }


}

module.exports = new Home();