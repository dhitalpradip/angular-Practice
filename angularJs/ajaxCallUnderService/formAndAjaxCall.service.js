/**
 * Created by pradip on 5/23/2017.
 */
var userApp = angular.module('mainModule',[]);
userApp.service('loadUserService',['$http',function($http){
    $http.get('userDetails.json').then(function(response){
         var userDetails = function(){
             return response;

         }

     })}]);