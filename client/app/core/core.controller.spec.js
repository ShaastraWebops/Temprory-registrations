'use strict';

describe('Controller: CoreCtrl', function () {

  // load the controller's module
  beforeEach(module('temproryRegistrationsApp'));

  var CoreCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CoreCtrl = $controller('CoreCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
