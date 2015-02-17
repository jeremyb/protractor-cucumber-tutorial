var homepagePage = function() {
    this.get = function() {
        return browser.get('/');
    };

    this.getCatalog = function() {
        return element.all(by.repeater('product in catalog'));
    };

    this.clickToProduct = function(link) {
        return element.all(by.css('#catalog a')).filter(function(element) {
            return element.getText().then(function(text) {
                return text === link;
            });
        }).then(function(linkElements) {
            return linkElements[0].click();
        });
    };

    this.getSidebarCart = function() {
        return element.all(by.repeater('product in cart.getItems()'));
    };

    this.getSidebarElementFromText = function(text) {
        return element(by.cssContainingText('#sidebar', text));
    };
};

module.exports = homepagePage;
