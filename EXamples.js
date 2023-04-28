var app = angular.module("myapp", []);
app.controller("myCtrl", function ($scope, $http) {
  $scope.products = [];
  $http.get("products.json").then(
    function (response) {
      //sucess
      $scope.products = response.data;
    },
    function (response) {
      //error
      alert("lỗi!");
    }
  );
});
// app.config(function ($routeProvider) {
//   $routeProvider
//     .when("/Home", {
//       templateUrl: "Home.html?" + Math.random(),
//     })
//     .when("/E-commerce", {
//       templateUrl: "E-commerce.html?" + Math.random(),
//     })
//     .when("/Login", {
//       templateUrl: "login.html?" + Math.random(),
//     })
//     .when("/Examples", {
//       templateUrl: "Examples.html?" + Math.random(),
//     })
//     .when("/detail/:url", {
//       templateUrl: "detailProduct.html?" + Math.random(),
//       controller: "myCtrl",
//     })
//     .otherwise({
//       redirectTo: "/Home",
//     });
// });
