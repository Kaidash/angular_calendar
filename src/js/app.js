'use strict';
(function(){
    
angular.module('snApp', ['ui.router', 'ngResource']).config(['$urlRouterProvider', '$stateProvider', '$locationProvider', snConfig]);
function snConfig($urlRouterProvider, $stateProvider, $locationProvider) {
    $urlRouterProvider.otherwise("/");

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: '/tpl/home.html',
            controller: 'HomeCtrl'
        })


}

})();