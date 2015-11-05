'use strict';
import UserListCtrl from './user-list.controller';

export default (ngModule) => {
	ngModule
		.directive('userList', userListDirective)
		.controller('UserListCtrl', UserListCtrl);

	/* @ngInject */
	function userListDirective() {
		return {
			scope: {
				frameData: '='
			},
			controller: 'UserListCtrl',
			controllerAs: 'vm',
			bindToController: true,
			template: require('./user-list.template.html')
		};
	}
}