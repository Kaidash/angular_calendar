'use strict';
(function(){
    
angular.module('snApp').controller('HomeCtrl', ['$scope', '$location', HomeCtrl]);

function HomeCtrl($scope,location) {

    $scope.day = moment();
    var json=[
        { "name": "Задача 2", "date": "2016-08-28", time: "15:00:00", category: "cat1", VIP: true  },
        { "name": "Задача 1", "date": "2016-08-30", time: "4:00:00", category: "cat2", VIP: true  },
        { "name": "Задача 3", "date": "2016-08-28", time: "16:00:00", category: "cat1", VIP: true  }
    ];
    $scope.ocw=json

   
}

})();

