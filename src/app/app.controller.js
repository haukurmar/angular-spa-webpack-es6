'use strict';

@Inject('$timeout')
class MainController {
	constructor() {

		console.log('$timeout', $timeout);
		// Virkar bæði með og án this. í constructor
		console.log('this.$timeout', this.$timeout);
		this.data = [];
		this.title = 'Main controller';

		// Run
		// ----------------------------------------------
		this.activate();
	}

	// Class methods
	// --------------------------------------------------
	activate() {
		console.log('Main controller', this.$timeout);
	}

	someFunction() {
		console.log('some function');
	}
}

export default MainController;
