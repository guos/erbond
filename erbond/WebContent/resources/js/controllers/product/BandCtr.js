'use strict';

/* Controllers */

  // Form controller
app.controller('BandCtrl', ['$scope','$http', '$modal',function($scope,$http,$modal) {
	 $scope.band = {};
	 $scope.featchBandList=function(){		
		$http.get('resources/api/band.json').success(function(rsList){
			$scope.Bands=rsList;
			console.dir("success!");
		}).error(function(){
			console.dir("fails");						
		});
		
	};
	
	$scope.featchProducerList=function(){		
		$http.get('resources/api/producer.json').success(function(rsList){
			$scope.producerList=rsList;
			console.dir("success!");
		}).error(function(){
			console.dir("fails");						
		});
		
	};
	
	$scope.featchProducerList();
	$scope.featchBandList();
	
	    
    //function
    
	  $scope.newBand = function(item) {		 
		  console.dir(item.english);
		  console.dir(item.name);
		  console.dir(item.producer);
		  $scope. ok();
		  $scope.featchProducerList();
	  }
    
    
	  $scope.val =15;
    var updateModel = function(val){
      $scope.$apply(function(){
        $scope.val = val;
      });
    };


     $scope.predicate='id';



  }])
 ;