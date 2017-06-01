/**
 * Created by pradip on 5/22/2017.
 */
var userApp = angular.module('mainModule',[]);
userApp.controller('loadUserController',['$scope','$http','$rootScope',function($scope,$http,$rootScope){
    $http.get('userDetails.json').then(function(response){
        $scope.userDetails = response.data;
    });
    $scope.editUser =function(details){
        console.log($scope.details[0]);
        $rootScope.uData = $scope.details[0];
    }
}]);

userApp.controller('postuserController',['$scope','$http','$rootScope',function($scope,$http,$rootScope){
    $scope.postUserDetails = function(){
        console.log($rootScope.uData);
        $http.post('userDetails.json',$rootScope.uData);
    }

}]);





