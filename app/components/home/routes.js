require('./controllers');

exports = angular.module('home.routes', ['home.controllers'])
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
        $stateProvider.state('home', {
            url: '/home',
            templateUrl: 'templates/home/views/home.html',
            controller: 'HomeCtrl'
        });
    }])
