(function() {
	var app = angular.module('myPage');
	app.controller('MyDataController', [function() {
		this.preferredName = 'Pedro';
		this.firstName = this.preferredName + ' Guilherme';
		this.lastName = 'Rohr';
		this.fullName = this.firstName + ' ' + this.lastName;
	}]);
})();