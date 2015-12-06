require('./services')
require('./controllers')

exports = angular.module('patient.routes', ['patient.services', 'patient.controllers'])
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
        $stateProvider.state('patient', {
            url: '/patient',
            templateUrl: 'views/patient/index.html',
            controller: 'PatientCtrl',
            resolve: {
                patients: function(PatientService) {
                    return PatientService.query();
                }
            }
        });
    }])
