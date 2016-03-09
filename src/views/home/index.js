import angular from 'angular';
import markup from './home.html';
import Controller from './home';

angular
  .module('app.views')
  .constant('HomeState', {
    url: '/home',
    template: markup,
    controllerAs: 'home',
    controller: Controller
  });
