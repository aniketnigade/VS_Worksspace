app.controlller('MainController',['$scope',function($scope){
    $scope.timestamp = Date();
    $scope.smallnumber = 0;
    $scope.theMessage = "";
    $scope.checkNumber =function(){
        if (isNaN($scope.smallnumber) || $scope.smallnumber < 1 || $scope.smallnumber > 10) {
            $scope.theMessage = "Number must be in range of 1 to 10";
            
        } else{
            $scope.theMessage = "Good Number";    
        }
    }
    
    $scope.Article = [{}]; 

    var _first = "Your";
    var _last = "Name";
    $scope.User = {
        firstName : function(first){return arguments.length ? (_first = first) : _first}, 
        lastName : function(last){return arguments.length ? (_last = last) : _last},
        fullName: function(){return _first + '' +  _last ; }
    }
        
}]);
