var fs = require('fs');

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var expect = chai.expect;

module.exports = function() {

    this.registerHandler('AfterScenario', function (event, callback) {
        // clear localStorage
        browser.executeScript('window.localStorage.clear();');
        callback();
    });

    this.Given(/I am on the homepage/, function(next) {
        browser.get('/');
        next();
    });

    this.Then(/the title should equal "([^"]*)"$/, function(text, next) {
        expect(browser.getTitle())
            .to.eventually.equal(text)
            .and.notify(next);
    });

    this.Then(/the sidebar with the summary cart should contains no items/, function(next) {
        expect(element.all(by.repeater('product in cart.getItems()')))
            .to.eventually.have.length(0)
            .and.notify(next);
    });

    this.Then(/I should see "([^"]*)" in the sidebar$/, function(text, next) {
        expect(element(by.cssContainingText('#sidebar', text)).isPresent())
            .to.become(true)
            .and.notify(next);
    });

    this.Then(/I should see ([0-9]*) products/, function(count, next) {
        expect(element.all(by.repeater('product in catalog')))
            .to.eventually.have.length(count)
            .and.notify(next);
    });

    this.Then(/I follow the product link "([^"]*)"$/, function(link, next) {
        element.all(by.css('#catalog a')).filter(function(element) {
            return element.getText().then(function(text) {
                return text === link;
            });
        }).then(function(linkElements) {
            linkElements[0].click().then(function() {
                next();
            });
        });
    });

    this.Then(/I should see the product detail page/, function (next) {
        expect(
            element(by.css('#catalog')).then(function(element) {
                element.all(by.css('p')).first().getText().then(function(text) {
                    expect(text).to.contain('Lorem ipsum dolor sit amet');
                });

                element.$('button').getText().then(function(text) {
                    expect(text).to.contain('Add to cart');
                });
            })
        )
        .to.be.fulfilled
        .and.notify(next);
    });

    this.Then(/I click to the add to cart button/, function(next) {
        element(by.css('[ng-click="addToCart()"]')).then(function(element) {
            element.click().then(function() {
                next();
            });
        });
    });

};
