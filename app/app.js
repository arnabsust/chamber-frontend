require('angular');
require('./components/home/config');
require('./components/patient/config');

var chamber = angular.module('chamber', [
    require('angular-ui-router'),
    require('angular-resource'),
    'home',
    'patient'
]);

chamber.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
}]);
