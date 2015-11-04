'use strict';

/* Controllers */

  // Form controller
app.controller('FormDemoCtrl', ['$scope','$http', function($scope,$http) {
	
	$scope.featchCustomerList=function(){
		
		$http.get('resources/js/controllers/customer.json').success(function(rsList){
			$scope.customers=rsList;
			console.dir("success!");
		}).error(function(){
			console.dir("fails");
			$scope.setError("Couldn't connect to server");
			
		});
		
	};
	
	
	$scope.featchCustomerList();
	
	
	
	
    $scope.notBlackListed = function(value) {
      var blacklist = ['bad@domain.com','verybad@domain.com'];
      return blacklist.indexOf(value) === -1;
    }

    $scope.val = 15;
    var updateModel = function(val){
      $scope.$apply(function(){
        $scope.val = val;
      });
    };
    angular.element("#slider").on('slideStop', function(data){
      updateModel(data.value);
    });

    $scope.select2Number = [
      {text:'First',  value:'One'},
      {text:'Second', value:'Two'},
      {text:'Third',  value:'Three'}
    ];

    $scope.list_of_string = ['tag1', 'tag2']
    $scope.select2Options = {
        'multiple': true,
        'simple_tags': true,
        'tags': ['tag1', 'tag2', 'tag3', 'tag4']  // Can be empty list.
    };

    angular.element("#LinkInput").bind('click', function (event) {
      event.stopPropagation();
    });

  }])
 ;