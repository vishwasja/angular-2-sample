'use strict';

angular.module('sample2App.auth', [
  'sample2App.constants',
  'sample2App.util',
  'ngCookies',
  'ngRoute'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
