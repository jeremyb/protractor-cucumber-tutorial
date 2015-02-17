var productPage = function() {
    this.addToCart = function() {
        return element(by.css('[ng-click="addToCart()"]')).then(function(element) {
            return element.click();
        });
    };

    this.validatePage = function() {
        return element(by.css('#catalog')).then(function(element) {
            //element.all(by.css('p')).first().getText().then(function(text) {
            //    expect(text).to.contain('Lorem ipsum dolor sit amet');
            //});
            //
            //element.$('button').getText().then(function(text) {
            //    expect(text).to.contain('Add to cart');
            //});
        })
    };
};

module.exports = productPage;
