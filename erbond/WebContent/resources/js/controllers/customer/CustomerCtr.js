'use strict';

/* Controllers */

// Form controller
app.controller('CustomerCtrl', [
		'$scope',
		'$http',
		'$modal',
		function($scope, $http, $modal) {
			$scope.customer = {};
			$scope.featchCustomerList = function() {
				$http.get('resources/api/customer.json').success(
						function(rsList) {
							$scope.customers = rsList;
							console.dir("get customer list success!");
						}).error(function() {
					console.dir("get customer fails");
				});

			};		
			// ----------call function
			$scope.customer.type = 'org';		
			$scope.featchCustomerList();
			// function

			$scope.newCustomer = function(value) {
				
              console.dir(value);
              $scope.ok();
			}

			// -------end

		} ]);
