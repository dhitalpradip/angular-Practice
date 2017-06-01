/**
 * Created by pradip on 5/22/2017.
 */
var userApp = angular.module('mainModule',[]);
userApp.service('userDetailService',function($http,$q){
var deferred = $q.defer();
this.getData= function(){
    $http.get('userDetails.json')
        .then(function(response){
            deferred.resolve(response.data);
            return deferred.promise;
        },
            function(response) {
                deferred.reject(response);
                return deferred.promise;
            }
        )
}
});
