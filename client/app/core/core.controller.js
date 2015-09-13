'use strict';

angular.module('temproryRegistrationsApp')
  .controller('CoreCtrl', function ($scope, $timeout, $q,$http, $state,Auth, $mdDialog,User) {
 $scope.submitted = false;
  $scope.showButton = false;
  $scope.subDepts = [];

  $scope.coords = [];
  $scope.superCoords = [];
  $scope.cores = [];
    $http.get('/api/users/getCores')
    .then(function (data) {
      $scope.cores = data.data;
    },function (err){
       console.log(err);
    });
  
  $http.get('/api/users/getCoords')
    .then(function (data) {
      $scope.coords = data.data;
    },function (err){
       console.log(err);
    });

   $http.get('/api/users/getSuperCoords')
    .then(function (data) {
      $scope.superCoords = data.data;
    },function (err){
       console.log(err);
    });
  $scope.selectedCoords = [];
  $scope.coordIds = [];
  $scope.selectedSuperCoords = [];
  $scope.superCoordIds = [];
  $scope.selectedCores = [];
  $scope.coreIds = [];
  Auth.isLoggedInAsync(function(success){
    if(success)
    {
          $http.get('/api/users/getSubDepartments/'+Auth.getUserId())
  .then(function (data) {
      $scope.subDepts = data.data;
    },function (err){
       console.log(err);
    });
        }  
  })
    $scope.newSubDept = function (form) {
    $scope.submitted = true;
    angular.forEach($scope.selectedCoords, function (item) {
      $scope.coordIds.push(item._id);
    });
    angular.forEach($scope.selectedSuperCoords, function (item) {
      $scope.superCoordIds.push(item._id);
    });
        angular.forEach($scope.selectedCores, function (item) {
      $scope.coreIds.push(item._id);
    });

    if(form.$valid) {
      $http.put('/api/subDepartments',{
        name: $scope.subDept.name,
        info:$scope.subDept.info,
        cores:$scope.subDept.coreIds,
        superCoords:$scope.superCoordIds,
        coords: $scope.coreIds
      })
      .then(function (response) {
        if(response.status === 201) {
          $scope.submitted = false;
          $state.go('core');
          $scope.hide();
          location.reload();
          // sessionStorage.clear();
        } else {
          $scope.submitted = false;
          $rootScope.showToast('Error occurred!');
        }
      })
      .catch(function (err) {
        $rootScope.showToast('Error! Check internet connection!');
        console.log(err);
      });
    }
  };

  $scope.subDeptModal = function(){
        $mdDialog.show({
        controller: DialogController,
        templateUrl: '/app/core/addSubDeptModal.html',
        parent: angular.element(document.body)
      })
      .then(function (answer) {
        $scope.alert = 'You said the information was "' + answer + '".';
      }, function () {
        $scope.alert = 'You cancelled the dialog.';
      }); 
      }  

  });

function DialogController($scope, $mdDialog, $http,$state,Auth) {

  $scope.hide = function(){
    $mdDialog.hide();
  }
  $scope.newSubDept = function (form) {

    if(form.$valid) {
      $http.post('/api/subDepartments',{
        name: $scope.subDept.name,
        info:$scope.subDept.info
      })
      .then(function (response) {
        if(response.status === 201) {
          $state.go('core');
          $scope.hide();
          location.reload();
          // sessionStorage.clear();
        } else {
          $rootScope.showToast('Error occurred!');
        }
      })
      .catch(function (err) {
        $rootScope.showToast('Error! Check internet connection!');
        console.log(err);
      });
    }
  }; 
}

