/**
 * Created by pradip on 5/22/2017.
 */

var userApp = angular.module('mainModule',[]);
userApp.controller('loadUserController',['$scope','$http','$rootScope',function($scope,$http,$rootScope,userDetailService){

userDetailService.getData()
    .then(function(successResult){
    $scope.allData = successResult;
    },
    function(error){
        console.log(error.statusText)
    }
    )
}]);
