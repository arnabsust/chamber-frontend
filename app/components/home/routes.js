require('./controllers');

exports = angular.module('home.routes', ['home.controllers'])
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
        $stateProvider.state('home', {
            url: '/home',
            templateUrl: 'public/home.html',
            controller: 'HomeCtrl'
        });
    }])
