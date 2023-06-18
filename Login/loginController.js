 app.controller('LoginController', function($scope, $location) {
   // $rootScope.title = "AngularJS Login Sample";
    
    $scope.authenticate = function (username) {
      // write authentication code here.. 
      console.log(username);
      $location.path('/home/' + username)
  };
});
