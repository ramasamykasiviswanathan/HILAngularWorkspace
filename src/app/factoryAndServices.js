(function () {
	/* body... */
	angular.module('factoryAndServices',[])
	.factory('userAuthorisationFactory',userAuthorisationFactory);

	userAuthorisationFactory.$inject=["$log"];
	function userAuthorisationFactory($log)
	{
		var userAuthorisationFactoryStorage;
		function authenticateUser (argument) {
			userAuthorisationFactoryStorage.authenticated=true;
			userAuthorisationFactoryStorage.digitalKey=aabbccdeeff;
			userAuthorisationFactoryStorage.userName=ramasamy.kasiviswanathan@HIL.com
		}
	}
})()