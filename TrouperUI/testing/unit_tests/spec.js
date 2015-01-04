describe("An Angular Test Suite", function() {

	beforeEach(module('ngResource'));

	it('should inject dependencies', inject(function ($resource) {
		expect($resource).toBeDefined();
	}));
})