'use strict';

import '../assets/less/app.less';

angular.module('app', []);

/**
 * Main Controller
 */
angular
	.module('app')
	.controller('MainCtrl', MainCtrl);

/* @ngInject */
function MainCtrl() {
	// "Controller as" the ViewModel
	var vm = this;

	// Public ViewModel
	// --------------------------------------------------
	vm.data = [];
	vm.title = "Main controller";
	vm.someFunction = someFunction;

	// Run
	// --------------------------------------------------
	activate();

	// Private functions
	// --------------------------------------------------
	function activate() {
		console.log('Main controller');
	}

	function someFunction() {

	}
}
