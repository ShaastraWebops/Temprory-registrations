'use strict';

angular.module('temproryRegistrationsApp')
  .controller('CoreCtrl', function ($scope, $timeout, $rootScope, $q,$http, $state,Auth, $mdDialog,User) {
 $scope.submitted = false;
  $scope.showButton = false;
  $scope.subDepts = [];
  console.log($scope.sub);
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
  $scope.coordIds = [];
  $scope.selectedCoords = [];
  $scope.superCoordIds = [];
  $scope.selectedSuperCoords = [];
  $scope.coreIds = [];
  $scope.selectedCores = [];
  Auth.isLoggedInAsync(function(success){
    if(success)
    {
          $http.get('/api/departments/getSubDepartments/'+Auth.getCurrentUser().department[0])
  .then(function (data) {
    console.log(data);
      $scope.subDepts = data.data;
    },function (err){
       console.log(err);
    });
        }  
  })
    $scope.editSubDept = function (form,index) {
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
      $http.put('/api/subDepartments/'+$scope.subDepts[index]._id,{
        name: $scope.subDepts[index].name,
        info:$scope.subDepts[index].info,
        cores:$scope.coreIds,
        superCoords:$scope.superCoordIds,
        coords: $scope.coordIds
      })
      .then(function (response) {
        if(response.status === 200) {
          $scope.submitted = false;
          $state.go('core');
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
        parent: angular.element(document.body),
        locals: {
        Core: Auth.getCurrentUser()
      }
      })
      .then(function (answer) {
        $scope.alert = 'You said the information was "' + answer + '".';
      }, function () {
        $scope.alert = 'You cancelled the dialog.';
      }); 
      }  

      function DialogController($scope, $mdDialog, $rootScope,$http,$state,Auth,Core) {

  $scope.hide = function(){
    $mdDialog.hide();
  }
  $scope.newSubDept = function (form) {
    $scope.submitted = true;
    $scope.dept= Core.department[0];
    console.log(Core.department[0]);
    if(form.$valid) {
      $http.post('/api/subDepartments',{
        name: $scope.subDept.name,
        info:$scope.subDept.info,
        department:$scope.dept
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
        console.log(err);
      });
    }
  };

  };
});



