'use strict';

class MainController {
	constructor() {
		this.data = [];
		this.title = "Main controller";

		// Run
		// ----------------------------------------------
		this.activate();
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