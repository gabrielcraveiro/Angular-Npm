'use strict';

var myApp =

  // Declare app level module which depends on views, and components
  angular.module('myApp', [
    'ngRoute',
    'ngRoute',
    'ui.router'
  ]).
config(['$locationProvider', '$routeProvider', '$stateProvider', '$urlRouterProvider', function ($locationProvider, $routeProvider, $stateProvider, $urlRouterProvider) {
  $locationProvider.hashPrefix('!');

  $stateProvider
    .state('cadastravagas', {
      url: '/cadastravagas',
      templateUrl: '/Templates/cadastravagas.html',
      controller: 'CadastraVagasController'

    })

    .state('consultacandidatos', {
      url: '/consultacandidatos',
      templateUrl: '/templates/consultacandidatos.html',
      controller: 'ConsultaCandidatosController'
    })

    .state('index', {
      url: '/consultavagas',
      templateUrl: '/templates/consultavagas.html',
      controller: 'IndexController'
    })

  $urlRouterProvider.otherwise('consultavagas');
}]);