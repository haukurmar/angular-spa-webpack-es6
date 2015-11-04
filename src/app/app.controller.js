'use strict';

// Inject dependencies
@Inject('$timeout')
class MainController {
	constructor() {

		this.data = [];
		this.title = 'Main controller';

		// Run
		// ----------------------------------------------
		this.activate();

		// Dependencies work both with or without this. in the constructor
		console.log('$timeout', $timeout);
		console.log('this.$timeout', this.$timeout);
	}

	// Class methods
	// --------------------------------------------------
	activate() {
		console.log('Main controller');
	}

	someFunction() {
		console.log('some function');
	}
}

export default MainController;