"use strict";angular.module("l2dApp",["ui.bootstrap"]).config(["$routeProvider",function(t){t.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("l2dApp").controller("MainCtrl",["$scope","$http",function(t,e){e.get("staff.json").success(function(e){t.stafflist=e})}]);