'use strict'

/** @ngInject */
export default function routing($routeProvider, $locationProvider) {
	$locationProvider.html5Mode(true);
	$routeProvider.otherwise('/');
}