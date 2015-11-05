'use strict';

class UserService {
	constructor() {
		this.users = ['Ravis', 'Travis', 'Reksjon', 'Tó'];
	}

	getUsers() {
		return this.users;
	}
}

export default (ngModule) => {
	ngModule
		.service('userService', UserService);
}