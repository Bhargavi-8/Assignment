var app = angular.module('myApp');
app.controller('HomeController', function ($scope, $http, $window, $routeParams) {
   $scope.username = $routeParams.username;
   $scope.users=[];
    console.log($scope.username);
    $http.get('db.json').then(function successCallback(response) {
        $scope.users = response.data;
        console.log($scope.users);
    }, function errorCallback(response) {
        console.log(response.status);
    });

    // $scope.deleteUser = function (username){
    //     $scope.users.splice(username,1);
    //     alert("JSON Name is deleted");
    //   }
    $scope.CheckUncheckHeader = function () {
        $scope.IsAllChecked = true;
        // $scope.enableDeleteBtn = $.grep($scope.users, function (user) {
        //     return user.IsSelected;
        // }).length >= 1;
        for (var i = 0; i < $scope.users.length; i++) {
            if (!$scope.users[i].Selected) {
                $scope.IsAllChecked = false;
                break;
            }
            
        };
    };
    $scope.CheckUncheckHeader();

    $scope.CheckUncheckAll = function () {
        for (var i = 0; i < $scope.users.length; i++) {
            $scope.users[i].Selected = $scope.IsAllChecked;
        }
    };

    $scope.isChecked = function() {
        for(var e in $scope.users) {
             var user = $scope.users[e];
            if(user.Selected)
                return true;
        }
        return false;
    };
    // $scope.userSelectionChanged = function () {
    //     $scope.enableAddBtn = $.grep($scope.users, function (user) {
    //         return user.Selected;
    //     }).length >= 1;
    //     console.log($scope.enableAddBtn);
    // };

    $scope.deleteUser = function () {
        $('#deleteModal').hide();
        $('.modal-backdrop').hide();
        var selected = new Array();
        for (var i = 0; i < $scope.users.length; i++) {
            if ($scope.users[i].Selected) {
                selected.push(i);
            }
        }
        for (var i = selected.length - 1; i >= 0; i--) {
            $scope.users.splice(selected[i], 1);
        }
        console.log('after deleting', $scope.users);
    };
   
});   

// app.directive('deleteModal', function() {
//     return {
//       restrict: 'A',
//       link: function(scope, element, attr) {
//         scope.dismiss = function() {
//             element.modal('hide');
//         };
//       }
//     } 
//  });