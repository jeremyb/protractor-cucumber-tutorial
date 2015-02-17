var assert = require('assert');

var homepagePage = require('./homepagePage.js');
var productPage  = require('./productPage.js');

module.exports = function() {

    this.registerHandler('AfterScenario', function (event, callback) {
        // clear localStorage
        browser.executeScript('window.localStorage.clear();');
        callback();
    });

    var homepage = new homepagePage();
    var product  = new productPage();

    this.Given(/I am on the homepage/, function(next) {
        homepage.get().then(function() {
            next();
        });
    });

    this.Then(/the sidebar with the summary cart should contains no items/, function(next) {
        homepage.getSidebarCart().then(function (elements) {
            assert.equal(elements.length, 0);
            next();
        });
    });

    this.Then(/I should see "([^"]*)" in the sidebar$/, function(text, next) {
        homepage.getSidebarElementFromText(text).isPresent().then(function (status) {
            assert(status);
            next();
        });
    });

    this.Then(/I should see ([0-9]*) products/, function(count, next) {
        homepage.getCatalog().then(function (elements) {
            assert.equal(elements.length, count);
            next();
        });
    });

    this.Then(/I follow the product link "([^"]*)"$/, function(link, next) {
        homepage.clickToProduct(link).then(function(element) {
            next();
        });
    });

    this.Then(/I should see the product detail page/, function (next) {
        product.validatePage().then(function() {
            next();
        });
    });

    this.Then(/I click to the add to cart button/, function(next) {
        product.addToCart().then(function() {
            next();
        });
    });

};
