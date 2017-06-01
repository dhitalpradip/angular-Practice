/**
 * Created by shras on 5/21/2017.
 */


var myApp = angular.module('mainModule',[]);
myApp
    .controller('mainController',['$scope', function($scope){
        $scope.display = 'This is an example of custom directive to load a template by using template property';
        $scope.customer = {
            name:'pradip',
            address:'cupertino'
        };
    }])

    .directive('mainDirective',function(){
        return {
            restrict: 'E',
            scope:{
              contact: '=display'
            },
            templateUrl: 'contact.html'
        };
    });

