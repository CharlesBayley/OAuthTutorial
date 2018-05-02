const app = angular.module("main", ['ngRoute', 'LocalStorageModule']);

app.controller("mainController", ["$scope", "$http", ($scope, $http) => {

  $scope.login = () => {

    const data = {
      username: $scope.username,
      password: $scope.password,
      grant_type: "password"
    }

    // to post a person

    $http({
      method: "POST",
      url: "http://localhost:54207/token",
      data: data,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      transformRequest: function (obj) {
        var str = [];
        for (var p in obj)
          str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
        return str.join("&");
      },
    }).then(resp => {
      console.log(resp)
      // store the token
      if (resp.status == 200) {
        localStorage.setItem("token", resp.data.access_token);
      }
    })
  }


}]);

app.controller('signupController', ['$scope', '$http', function ($scope, $http) {

  $scope.message = "";

  $scope.registration = {
    userName: "",
    password: "",
    confirmPassword: ""
  };

  $scope.signUp = function () {

    // the sign up post
    // the login post

    var startTimer = function () {
      var timer = $timeout(function () {
        $timeout.cancel(timer);
        $location.path('/login');
      }, 2000);
    }
  }
}]);
