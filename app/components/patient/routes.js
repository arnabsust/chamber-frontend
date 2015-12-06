require('./services')
require('./controllers')

exports = angular.module('patient.routes', ['patient.services', 'patient.controllers'])
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
        $stateProvider.state('patient', {
            url: '/patient',
            templateUrl: 'public/views/patient/index.html',
            controller: 'PatientCtrl',
            resolve: {
                patients: ['PatientService', function(PatientService) {
                    return PatientService.query();
                }]
            }
        });
    }])
