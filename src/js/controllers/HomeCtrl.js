'use strict';
(function(){
    
angular.module('snApp').controller('HomeCtrl', ['$scope', '$location', HomeCtrl]);

function HomeCtrl($scope,location) {

    $scope.day = moment();
    var json=[
        { "name": "Задача 2", "date": "2016-08-28", time: "10:00:00", category: "cat1", VIP: true  },
        { "name": "Задача 1", "date": "2016-08-30", time: "4:00:00", category: "cat2", VIP: false  },
        { "name": "Задача 3", "date": "2016-08-28", time: "19:00:00", category: "cat1", VIP: false  },
        { "name": "Задача 4", "date": "2016-09-01", time: "17:00:00", category: "cat3", VIP: true  },
        { "name": "Задача 6", "date": "2016-09-02", time: "16:00:00", category: "cat2", VIP: true  },
        { "name": "Задача 7", "date": "2016-09-03", time: "15:00:00", category: "cat2", VIP: false  },
        { "name": "Задача 8", "date": "2016-09-02", time: "18:00:00", category: "cat3", VIP: true  },
        { "name": "Задача 9", "date": "2016-09-04", time: "20:00:00", category: "cat2", VIP: true  }
    ];
    $scope.ocw=json

   
}

})();

