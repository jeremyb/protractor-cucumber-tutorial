(function (window, angular, undefined) {

    'use strict';

    angular
        .module('bddSample', [
            'ngResource',
            'ui.router',
            'angular-storage',
            'shop'
        ])

        .config(function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider
                .otherwise('/');

            $stateProvider
                .state('about', {
                    url: '/about',
                    templateUrl: '/components/common/views/about.html'
                });
        });

})(window, window.angular);
