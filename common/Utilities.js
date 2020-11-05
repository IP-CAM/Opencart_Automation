class Utilities {
    /* Class with the function that wrap the functionalities of WebdriverIO */

    goToUrl(url) { browser.url(url); }

    /**
    * @param {WebdriverIO.Element} element webdriverIO Element
    */
    clickElement(element) {
        element.waitForDisplayed();
        element.click();
    }
    /**
    * @param {WebdriverIO.Element} element webdriverIO Element
    */
    getElementText(element) {
        element.waitForDisplayed();
        return element.getText();
    }
    /**
    * @param {WebdriverIO.Element} element webdriverIO Element
    */
    verifyElementExist(element) {
        element.waitForDisplayed();
        return element.isExisting();
    }

    getPageTitle() {
        return browser.getTitle();
    }
    /**
    * @param {WebdriverIO.Element} element webdriverIO Element
    * @param {string} word value to be written on the element
    */
    setElementValue(element, word) {
        element.waitForDisplayed();
        element.setValue(word);
    }

}

module.exports = new Utilities();