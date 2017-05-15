(function () {
	'use strict'
	angular.module('app.controller',['app.utils'])
	.constant('AUTHENTICATION_MODAL', {
		isAuthorised : true,
		user : 'ramasamy.kasiviswanathan@hil.com',
		digitalKey : 'aabbccddee1122334455'
	})
	.constant('DEFAULT_ROUTE_PATH','#!/')
	.run(populateRootScope)
	.controller('NavController', NavController)
	.controller('LoginController',
		LoginController)
	.controller('AddItemController',AddItemController)
	.controller('AddUserController',AddUserController)
	.controller('HomeScreenController',HomeScreenController);

	populateRootScope.$inject=['$rootScope','AUTHENTICATION_MODAL','$log'];
	function populateRootScope ($rootScope,AUTHENTICATION_MODAL,$log) {
		$log.debug("populateRootScope");
      $rootScope.AUTHENTICATION_MODAL = AUTHENTICATION_MODAL;
   }

	NavController.$inject=["$log","$interval","$rootScope","$location","DEFAULT_ROUTE_PATH"];
	function NavController($log,$interval,$rootScope,$location,DEFAULT_ROUTE_PATH)
	{
		$log.debug('NavController');
		var vm = this;
		vm.authorised = true;
		/*$log.info($rootScope.AUTHENTICATION_MODAL.isAuthorised);
		$interval(function () {
			$rootScope.AUTHENTICATION_MODAL.isAuthorised=!$rootScope.AUTHENTICATION_MODAL.isAuthorised;
		},1000);*/

		vm.logout = function () {
			$log.debug("NavController.logoutFunction");
			$log.debug($rootScope.AUTHENTICATION_MODAL.user);
			$rootScope.AUTHENTICATION_MODAL.isAuthorised = false;
			$rootScope.AUTHENTICATION_MODAL.user = null;
			$rootScope.AUTHENTICATION_MODAL.digitalKey = null;
			$location.path(DEFAULT_ROUTE_PATH);
		}
	}

	LoginController.$inject=['$log','$rootScope','$location','DEFAULT_ROUTE_PATH'];
	function LoginController($log, $rootScope, $location,DEFAULT_ROUTE_PATH)
	{
		$log.debug("LoginController");
		let vm = this;
		vm.username='';
		vm.password='';
		vm.submit=function()
		{
			$log.debug("Login Submit Function")
			vm.submitError=true;
			$rootScope.AUTHENTICATION_MODAL.isAuthorised = true;
			$rootScope.AUTHENTICATION_MODAL.user = vm.username;

			/**TODO Querying From Database**/
			$location.path(DEFAULT_ROUTE_PATH);
		}
	}

	AddItemController.$inject=['$log','$location','DEFAULT_ROUTE_PATH'];
	function AddItemController($log,$location,DEFAULT_ROUTE_PATH)
	{
		$log.debug("AddItemController");
		let vm = this;
		vm.submit = function (addItemctrl) {
			addItemctrl.invoiceDate = new Date;
			$log.debug("addItemctrl"+JSON.stringify(addItemctrl));
			vm.hasError=false;

			/**TODO Persisting Data**/
			$location.path(DEFAULT_ROUTE_PATH);
		}
	}

	AddUserController.$inject=['$log','$location','DEFAULT_ROUTE_PATH'];
	function AddUserController ($log,$location,DEFAULT_ROUTE_PATH) {
		$log.debug("AddUserController");
		let vm = this;
		vm.submit=function (username,password) {
			$log.debug("username:"+username+",password:"+password);
			vm.submitError=false;

			/**TODO Persisting Data**/
			$location.path(DEFAULT_ROUTE_PATH);
		}
	}

	HomeScreenController.$inject=['$log','$location','DEFAULT_ROUTE_PATH'];
	function HomeScreenController ($log, $location, DEFAULT_ROUTE_PATH) {
		$log.debug("HomeScreenController");
		let vm = this;
	}
})()