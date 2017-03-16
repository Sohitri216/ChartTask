'use strict';
module.exports = [
    '$stateProvider',
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('chart', {
                url: '/chart',
                template: require('../templates/chart.html'),
                controller: 'ChartController',
                controllerAs: 'vm'
            })
        $urlRouterProvider.otherwise('/chart');
    }
];
