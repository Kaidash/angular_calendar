'use strict';
(function(){
    
angular.module('snApp').controller('HomeCtrl', ['$scope', '$location', HomeCtrl]);

function HomeCtrl($scope,location) {

    $scope.day = moment();
}

})();

