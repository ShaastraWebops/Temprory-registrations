'use strict';

angular.module('temproryRegistrationsApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('admin', {
        url: '/admin',
        templateUrl: 'app/admin/admin.html',
        controller: 'AdminCtrl'
      })
      .state('home',{
      	url:'/',
      	templateUrl:'app/main/main.html',
      	controller:'AdminCtrl'
      });
  });