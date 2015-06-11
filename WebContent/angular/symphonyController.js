/**
 * symphony module
 */

function loginControler($scope, $http) {

	$scope.user = {
		username : "",
		password : ""
	};
	$scope.userauth = "";

	$scope.login = function() {
		
		$scope.toparams = function ObjecttoParams(obj) {
		    var p = [];
		    for (var key in obj) {
		        p.push(key + '=' + obj[key]);
		    }
		    return p.join('&');
		};

		var config = {
			'url' : 'http://app.dev.tagcmd.com/cmd/security/signin',
			'method' : 'POST',
			'headers' : {
				'Authorization' : 'apikey="apikey1"',
				'Content-Type' : 'application/json'
			},
			'data' : $scope.toparams($scope.user)
		};
		
		var loginData = $scope.toparams($scope.user);

		var req = $http(config);

		req.success(function(data, status) {
			$scope.userauth = data;
		}).error(function(data, status) {
			$scope.userauth = status;
		});

		$scope.reset();
		

	};

	$scope.reset = function() {
		$scope.user = {
			username : "",
			password : ""
		};
	};

	$scope.reset();
}