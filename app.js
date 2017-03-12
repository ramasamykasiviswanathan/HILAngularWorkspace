(function () {
	'use strict'
	angular.module('mainApp',['ngRoute','app.controller'])
	.config(applicationConfig)
	.config(routeConfig)
	.run(preventUnauthorisedAccess);

	applicationConfig.$inject=["$httpProvider","$compileProvider"];
	function applicationConfig($httpProvider,$compileProvider)
	{
		$httpProvider.useApplyAsync(true);
		//TODO: commented in case of production
		$compileProvider.debugInfoEnabled(true);
		//TODO: needs to be uncomented in case of production
		/*$compileProvider.commentDirectivesEnabled(false);
		$compileProvider.cssClassDirectivesEnabled(false);*/
	}
	// .config(routeConfig);

	routeConfig.$inject=["$routeProvider","$locationProvider"];
	function routeConfig($routeProvider,$locationProvider)
	{
		$routeProvider.when('/login',{
			controller:'LoginController',
			controllerAs:'loginCtrl',
			templateUrl:'src/template/login.html'
		})
		.when('/addItem',{
			controller:'AddItemController',
			controllerAs:'addItemctrl',
			templateUrl:'src/template/AddConsignment.html'
		})
		.when('/addUser',{
			controller:'AddUserController',
			controllerAs:'addUsrCtrl',
			templateUrl:"src/template/AddUser.html"
		})
		.when('/',{
			controllerAs
		});
	}

	preventUnauthorisedAccess.$inject=['$rootScope','$location','$log'];
	function preventUnauthorisedAccess($rootScope,$location,$log)
	{
		$log.debug("preventUnauthorisedAccess");
		/*$rootScope.on()*/
	}
})()