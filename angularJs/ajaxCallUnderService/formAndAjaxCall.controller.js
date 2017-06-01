/**
 * Created by pradip on 5/22/2017.
 */


var userApp = angular.module('mainModule',[]);
userApp.controller('loadUserController',['$scope','loadUserService',function($scope,loadUserService){
    $scope.userDetails= loadUserService.userDetails();
}]);



