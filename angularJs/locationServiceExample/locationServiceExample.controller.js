/**
 * Created by shras on 5/22/2017.
 */
var myApp = angular.module('locationServiceApp',[]);
myApp.controller('locationServiceController',['$scope','$location',function($scope,$location){
    $scope.name = "Pradip";
    $scope.pageUrl = $location.absUrl();
    $scope.getPageHost = $location.host();
    $scope.setUrl = $location.url('/path?a=b#hash');
    $scope.getPort = $location.port();
    // $scope.protocol = $location.protocol();



}]);
