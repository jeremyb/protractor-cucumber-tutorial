(function () {

    'use strict';

    var shop = angular.module('shop');

    shop
        .service('CatalogAPI', function ($resource) {
            var resource = $resource('/catalog/:id', { id:'@id' });

            this.findAll = function () {
                return resource.query();
            };

            this.findById = function (id) {
                return resource.get({ id: id }).$promise;
            };
        })

        .service('CatalogResolver', function (CatalogAPI, $q, $state, $log) {
            this.findById = function (id) {
                var deferred = $q.defer();

                CatalogAPI.findById(id)
                    .then(function (response) {
                        return deferred.resolve(response);
                    })
                    .catch(function () {
                        $log.error('Unable to retrieve product with the ID: ' + id);
                        $state.transitionTo('catalog');
                    });

                return deferred.promise;
            };
        })

        .service('Cart', function (store, $log) {
            var cart = store.get('cart');

            if (null === cart) {
                cart = {};
            }

            this.getItems = function () {
                return cart;
            };

            this.hasItems = function () {
                var length = 0;
                angular.forEach(cart, function() {
                    length++;
                });

                return length;
            };

            this.getTotal = function () {
                var total = 0;
                angular.forEach(cart, function (item) {
                    total += item.price;
                });

                return total;
            };

            this.addItem = function (product) {
                if (!angular.isObject(product)) {
                    $log.error('The given product is not a valid object.');
                    return;
                }

                cart[product.id] = product;
                store.set('cart', cart);
            };
        });

})();
