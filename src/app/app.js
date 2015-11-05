'use strict';
import '../assets/less/app.less';
import MainCtrl from './app.controller';
import usersModule from './users/users.module';

let ngModule = angular.module('app', [
	usersModule
]);

/**
 * Main Controller
 */
ngModule
	.controller('MainCtrl', MainCtrl);

export default ngModule.name;