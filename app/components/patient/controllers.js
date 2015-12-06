exports = angular.module('patient.controllers', [])
    .controller('PatientCtrl', ['$scope', 'patients', require('./controllers/patientCtrl')]);
