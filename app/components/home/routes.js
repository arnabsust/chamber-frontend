require('./controllers');

exports = angular.module('home.routes', ['home.controllers'])
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
        $stateProvider.state('home', {
            url: '/home',
            templateUrl: 'home.html',
            controller: 'HomeCtrl'
        });
    }])
