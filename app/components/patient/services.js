exports = angular.module('patient.services', [])
    .factory('PatientService', ['$resource', require('./services/patientService')]);
