'use strict';

angular.module('temproryRegistrationsApp')
  .controller('AdminCtrl', function ($scope, $timeout, $q,$http, $state,Auth, User) {

 $scope.submitted = false;
  $scope.showButton = false;
  $scope.cores = [];
  
  $http.get('/api/users/getCores')
    .then(function (data) {
      $scope.cores = data.data;
    },function (err){
       console.log(err);
    });
   
  $scope.selectedCores = [];
  $scope.coreIds = [];
  $scope.newDept = function (form) {
    $scope.submitted = true;
    angular.forEach($scope.selectedCores, function (item) {
      $scope.coreIds.push(item._id);
    });

    if(form.$valid) {
      $http.post('/api/departments',{
        name: $scope.dept.name,
        info:$scope.dept.info,
        cores: $scope.coreIds
      })
      .then(function (response) {
        if(response.status === 201) {
          $scope.submitted = false;
          $state.go('home');
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

  });

