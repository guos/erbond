'use strict';

/* Controllers */

  // Form controller
app.controller('ProductCtrl', ['$scope','$http', '$modal',function($scope,$http,$modal) {
	 $scope.Product = {};
	$scope.featchProductList=function(){		
		$http.get('resources/api/product.json').success(function(rsList){
			$scope.Products=rsList;
			console.dir("success!");
		}).error(function(){
			console.dir("fails");						
		});
		
	};
	
	$scope.Product.type='org';
	
	
	
	
	$scope.ProductStatus=false;	
	$scope.featchProductList();
    $scope.val = 15;
    
    
    //function
    
	  $scope.newProduct = function() {
		  $scope.ProductStatus=true;
		  console.dir($scope.ProductStatus);
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

    $scope.predicate='id';


  }])
 ;