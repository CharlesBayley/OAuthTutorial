const app = angular.module("main", ['ngRoute', 'LocalStorageModule']);

app.controller("mainController", ["$scope", "$http", ($scope, $http) => {

  $scope.contacts = [];

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
        //localStorage.setItem("token", resp.data.access_token);
        return resp.data;
      }
    }).then(data => {
      const access_token = data.access_token;
      const token_type = data.token_type;

      $http({
        method: 'GET',
        url: 'http://localhost:54207/api/contacts',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `${token_type} ${access_token}`
        }
      }).then(resp => {
        console.log(resp);
        if (resp.status === 200) {
          return resp.data;
        }
      }).then(data => {
        $scope.contacts = data;
      });
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
    console.log($scope.registration)

    // the sign up post
    $http({
      method: "POST",
      url: "http://localhost:54207/api/account/register",
      data: $scope.registration
    }).then(resp => {
      console.log(resp)
      if (resp.status === 200) {
        return resp.data;
      }
    }).then(data => {
      $scope.message = 'Signup worked! Now login!'
      console.log(data); // TODO: We need a data response to automate login later
    })

    // the login post

    var startTimer = function () {
      var timer = $timeout(function () {
        $timeout.cancel(timer);
        $location.path('/login');
      }, 2000);
    }
  }
}]);
