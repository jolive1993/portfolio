'use strict';

/**
 * @ngdoc overview
 * @name untitledApp
 * @description
 * # untitledApp
 *
 * Main module of the application.
 */
var app = angular.module('untitledApp', ['ngRoute', 'ngAnimate']);

// configure our routes
app.config(function($routeProvider) {
  $routeProvider

  // route for the home page
    .when('/', {
      templateUrl : 'views/main.html',
      controller  : 'MainCtrl'
    })

    // route for the about page
    .when('/about', {
      templateUrl : 'views/about.html',
      controller  : 'AboutCtrl'
    })

    // route for the contact page
    .when('/contact', {
      templateUrl : 'views/contact.html',
      controller  : 'ContactCtrl'
    });
});
