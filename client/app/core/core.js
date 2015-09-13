'use strict';

angular.module('temproryRegistrationsApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('core', {
        url: '/core',
        templateUrl: 'app/core/core.html',
        controller: 'CoreCtrl'
      });
  });