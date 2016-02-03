import angular from 'angular';
import router from 'angular-ui-router';

export default angular
  .module('app.views', [router])
  .config(configureStates).name;


// Import other views here
require('./home');

// Add additional states here (must be required)
const ROUTES = {
  'home': 'HomeState'
};

/* @ngInject */
function configureStates ($stateProvider, $urlRouterProvider, $injector) {
  angular.forEach(ROUTES, (constant, name) => {
    $stateProvider.state(name, $injector.get(constant));
  });

  $urlRouterProvider.otherwise('/home');
}