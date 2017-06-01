/**
 * Created by shras on 5/19/2017.
 */
angular.module('myApp', [])
    .controller('dropDownCtrl', ['$scope', function($scope) {

    }])
    .directive('dropdownSelectDirective', function() {
        return {
            restrict : "E",
            scope : {
                countries : '='
            },
            templateUrl: 'countrySelect.html',
        };
    });
