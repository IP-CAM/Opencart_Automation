class Utilities {
    /* Class with the function that wrap the functionalities of WebdriverIO */

    goToUrl(url) { browser.url(url); }

    clickElement(element) {
        element.waitForDisplayed();
        element.click();
    }

    getElementText(element) {
        element.waitForDisplayed();
        return element.getText();
    }

    verifyElementExist(element) {
        element.waitForDisplayed();
        return element.isExisting();
    }

    getPageTitle() {
        return browser.getTitle();
    }

    setElementValue(element, word) {
        element.waitForDisplayed();
        element.setValue(word);
    }

}

module.exports = new Utilities();