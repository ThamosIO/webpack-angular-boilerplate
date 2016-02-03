import angular from 'angular';
import router from 'angular-ui-router';

// Application wide style, only this style should be imported here
import './app.styl';

import views from './views';

angular.module('app', [
  views
]);
