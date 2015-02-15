(function () {

    'use strict';

    angular
        .module('shop', [
            'ngResource',
            'ui.router',
            'angular-storage'
        ])

        .config(function ($stateProvider) {
            $stateProvider.state('catalog', {
                url: '/',
                views: {
                    '@': {
                        templateUrl: '/components/shop/views/catalog.html'
                    },
                    '@catalog': {
                        templateUrl: '/components/shop/views/list.html',
                        controller: function($scope, CatalogAPI) {
                            $scope.catalog = CatalogAPI.findAll();
                        }
                    },
                    'sidebar@catalog': {
                        templateUrl: '/components/shop/views/sidebar.html',
                        controller: function($scope, Cart) {
                            $scope.cart = Cart;
                        }
                    }
                }
            });

            $stateProvider.state('catalog.show', {
                url: 'screencast/:id',
                views: {
                    '': {
                        templateUrl: '/components/shop/views/show.html',
                        resolve: {
                            product: function ($stateParams, CatalogResolver) {
                                return CatalogResolver.findById($stateParams.id);
                            }
                        },
                        controller: function($scope, product, Cart) {
                            $scope.product = product;

                            $scope.addToCart = function () {
                                Cart.addItem(product);
                            };
                        }
                    }
                }
            });
        });

})();
