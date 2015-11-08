'use strict';

/* Controllers */

  // Form controller
app.controller('FormDemoCtrl', ['$scope','$http', '$modal',function($scope,$http,$modal) {
	
	$scope.featchCustomerList=function(){
		
		$http.get('resources/api/customer.json').success(function(rsList){
			$scope.customers=rsList;
			console.dir("success!");
		}).error(function(){
			console.dir("fails");						
		});
		
	};
	$scope.customerStatus=false;	
	$scope.featchCustomerList();
    $scope.val = 15;
    
    
    //function
    
	  $scope.newCustomer = function() {
		  $scope.customerStatus=true;
		  console.dir($scope.customerStatus);
//		  var size=500;
//		    var modalInstance = $modal.open({
//		      templateUrl: 'resources/page/myModalContent.html',
//		      controller: 'ModalInstanceCtrl',
//		      size: size,
//		      resolve: {
//		        items: function() {
//		          return $scope.items;
//		        }
//		      }
//		    });
		    
	  }
    
    
    
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