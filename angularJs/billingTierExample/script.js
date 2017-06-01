/**
 * Created by pradip on 5/21/2017.
 */
var myApp = angular.module('mainModule',[]);
myApp.controller('mainController',function($scope){
    $scope.datas=[
        {
            min:1,
            max:200,
            unit:'mbps',
            display:'upto 200MB'
        },
        {
            min:201,
            max:500,
            unit:'mbps',
            display:'upto 500MB'
        },
        {
            min:501,
            max:1000,
            unit:'mbps',
            display:'upto 1GB'
        },
        {
            min:'1GB',
            max:'1GB',
            unit:'mbps',
            display:'upto 1GB'
        },
        {
            min:1,
            max:200,
            unit:'mbps',
            display:'upto 200 MB'
        },
        {
            min:1,
            max:200,
            unit:'mbps',
            display:'upto 200 MB'
        }
    ];

    // $scope.results=[];
    // $scope.findValue = function(enteredValue){
    //     angular.forEach($scope.datas,function(value,key){
    //         if(key==enteredValue){
    //             $scope.results.push({speed:value[0].display});
    //         }
    //     });
    //     // if(value>=1 || value<=200){
    //     //     $scope.display=$scope.datas.display;
    //     // }
    //     // if($scope.enteredValue>=1){
    //     //     $scope.displaySpeed =$scope.datas.display;
    //     // }
    // }

});