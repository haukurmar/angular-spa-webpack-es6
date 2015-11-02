'use strict';
import '../assets/less/app.less';
import MainCtrl from './app.controller';

let ngModule = angular.module('app', []);

/**
 * Main Controller
 */
ngModule
	.controller('MainCtrl', MainCtrl);

export default ngModule.name;