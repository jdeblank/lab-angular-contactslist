'use strict';

angular.module('l2dApp')
.controller('MainCtrl', function ($scope, $http) {
  $http.get('staff.json').success(function(data) {
    $scope.stafflist = data;
  });
});
