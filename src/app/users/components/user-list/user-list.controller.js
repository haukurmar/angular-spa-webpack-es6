'use strict';

// Inject dependencies
@Inject('userService')
class UserListCtrl {
	constructor() {
		this.users = [];

		// Run
		// ----------------------------------------------
		this.activate();
	}

	// Class methods
	// --------------------------------------------------
	activate() {
		console.log('User list controller...');

		// Get users from service
		this.users = this.userService.getUsers();
	}
}

export default UserListCtrl;