require('angular');
require('./components/home/config');
require('./components/patient/config');
require('./templates/templates');

var chamber = angular.module('chamber', [
    require('angular-ui-router'),
    require('angular-resource'),
    'home',
    'patient',
    'templatesCache'
]);

chamber.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
}]);
