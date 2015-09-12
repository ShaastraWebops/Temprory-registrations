'use strict';

angular.module('temproryRegistrationsApp')
  .controller('AdminCtrl', function ($scope, $timeout, $q, $http, Auth, User) {

    // Use the User $resource to fetch all users
    $scope.users = User.query();

    $scope.delete = function(user) {
      User.remove({ id: user._id });
      angular.forEach($scope.users, function(u, i) {
        if (u === user) {
          $scope.users.splice(i, 1);
        }
      });
    };

   $scope.newthing = '';
     // Grab the initial set of available things
    $http.get('/api/things').success(function(things) {
      $scope.things = things;
 
      // Update array with any new or deleted items pushed from the socket
      socket.syncUpdates('thing', $scope.things, function(event, thing, things) {
        // This callback is fired after the things array is updated by the socket listeners
 
        // sort the array every time its modified
        things.sort(function(a, b) {
          a = new Date(a.date);
          b = new Date(b.date);
          return a>b ? -1 : a<b ? 1 : 0;
        });
      });
    });
 
    // Clean up listeners when the controller is destroyed
    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('thing');
    });
 
    // Use our rest api to post a new thing
    $scope.addthing = function() {
      $http.post('/api/things', { name




        : $scope.newthing });
      $scope.newthing = '';
    };
  });

