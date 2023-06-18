app.controller('HomeController', function ($scope, $http, $window, $routeParams) {
    $scope.username = $routeParams.username;
    $scope.users = [];
    console.log($scope.username);
    $http.get('db.json').then(function successCallback(response) {
        $scope.users = response.data;
        console.log($scope.users);
    }, function errorCallback(response) {
        console.log(response.status);
    });

    $scope.reverse = false;
    $scope.sortKey = '';

    $scope.sort = function (keyname) {
        $scope.sortKey = keyname;
        $scope.reverse = !$scope.reverse;
    }

    $scope.CheckUncheckHeader = function () {
        $scope.IsAllChecked = true;
        for (var i = 0; i < $scope.users.length; i++) {
            if (!$scope.users[i].Selected) {
                $scope.IsAllChecked = false;
                break;
            }
        }
    };
    $scope.CheckUncheckHeader();

    $scope.CheckUncheckAll = function () {
        for (var i = 0; i < $scope.users.length; i++) {
            $scope.users[i].Selected = $scope.IsAllChecked;
        }
    };

    $scope.isChecked = function () {
        for (var e in $scope.users) {
            var user = $scope.users[e];
            if (user.Selected)
                return true;
        }
        return false;
    };

    $scope.deleteUser = function () {
        $('#deleteModal').hide();
        // $('.modal-backdrop').hide();
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

    setTimeout(function() {
        $('.logged-in').fadeOut('fast');       
    }, 2000);
});   