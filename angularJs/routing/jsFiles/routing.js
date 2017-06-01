/**
 * Created by shras on 5/19/2017.
 */

var mainApp = angular.module('mainModule',["ngRoute"]);


mainApp
    .controller('mainController', function($scope,$rootScope){
        $scope.title = 'Hello World admin';
        $scope.doBroadCast =function(){$rootScope.$broadcast('broadcasted')};
    });

mainApp.config(function($routeProvider){
   $routeProvider
       .when('/',{
           templateUrl:'../markUps/about.html',
           // controller:'mainController as ctrl'
       })
       .when('/about',{
           templateUrl:'../markUps/about.html',
           controller:'aboutController',

       })
       .when('/contact',{
           template:'<p>I am contact template</p>'

       });


});
mainApp
    .controller('aboutController', function($scope,$rootScope){
        $scope.title = 'Hello World user';
        $rootScope.$on('broadcasted', function(event) {

            $scope.datahere = event;
        });

    });



