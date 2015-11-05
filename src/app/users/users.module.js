'use strict';
let ngModule = angular.module('app.users', []);

// DIRECTIVES
//require('./directives/some.directive')(ngModule);

// SERVICES
require('./services/user.service')(ngModule);

// COMPONENTS
require('./components/user-list/user-list.component')(ngModule);

export default ngModule.name;