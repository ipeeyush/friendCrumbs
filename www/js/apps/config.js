var app = angular.module('myApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/login');
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'partials/home.html',
            controller: 'homeController'
        })
        .state('login', {
            url: '/login',
            templateUrl: 'partials/login.html',
            controller: 'loginController'
        })
        .state('contactList', {
            url: '/contactList',
            templateUrl: 'partials/contactList.html',
            controller: 'contactListController'
        })
        .state('navigation', {
            url: '/navigation',
            templateUrl: 'partials/navigation.html',
            controller: 'navigationController'
        })
        .state('location', {
            url: '/location',
            templateUrl: 'partials/locationPage.html',
            controller: 'locationController'
        })
        .state('newEvent', {
            url: '/newevent',
            templateUrl: 'partials/newEvent.html',
            controller: 'newEventController'
        })
        .state('inviteeList', {
            url: '/inviteeList',
            templateUrl: 'partials/inviteeList.html',
            controller: 'inviteeListController'
        })

});

