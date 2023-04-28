var app = angular.module("myapp", ["ngRoute"]);
app.controller("myCtrl", function ($scope, $rootScope, $routeParams, $http) {
  $scope.keyword = "";
  $scope.addCart = function (p) {
    if (typeof $rootScope.cart == "undefined") {
      $rootScope.cart = [];
    }
    $scope.countCart = $rootScope.cart.length;
    if ($rootScope.cart.filter((i) => i.id == p.id).length == 0) {
      $rootScope.cart.push(p);
      $rootScope.cart[$scope.countCart].quantity = 1;
    }
  };
  $rootScope.sumMoney = 0;
  if (typeof $rootScope.cart != "undefined") {
    for (var i = 0; i < $rootScope.cart.length; i++) {
      $rootScope.sumMoney =
        $rootScope.sumMoney +
        $rootScope.cart[i].quantity * $rootScope.cart[i].Price;
    }
  }
  $scope.addClick = function (index) {
    $rootScope.cart[index].quantity = $rootScope.cart[index].quantity + 1;
    if (typeof $rootScope.cart != "undefined") {
      $rootScope.sumMoney = 0;
      for (var i = 0; i < $rootScope.cart.length; i++) {
        $rootScope.sumMoney =
          $rootScope.sumMoney +
          $rootScope.cart[i].quantity * $rootScope.cart[i].Price;
      }
    }
  };
  $scope.subClick = function (index) {
    if ($rootScope.cart[index].quantity > 1) {
      $rootScope.cart[index].quantity = $rootScope.cart[index].quantity - 1;
    }
    if (typeof $rootScope.cart != "undefined") {
      $rootScope.sumMoney = 0;
      for (var i = 0; i < $rootScope.cart.length; i++) {
        $rootScope.sumMoney =
          $rootScope.sumMoney +
          $rootScope.cart[i].quantity * $rootScope.cart[i].Price;
      }
    }
  };
  $scope.delProduct = function (index) {
    $rootScope.cart.splice(index, 1);
    if (typeof $rootScope.cart != "undefined") {
      $rootScope.sumMoney = 0;
      for (var i = 0; i < $rootScope.cart.length; i++) {
        $rootScope.sumMoney =
          $rootScope.sumMoney +
          $rootScope.cart[i].quantity * $rootScope.cart[i].Price;
      }
    }
  };
  $scope.check = function (p) {
    if (typeof $rootScope.cart != "undefined") {
      alert("This Page was buy");
    }
  };
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
  $scope.index = $routeParams.url;
});
app.config(function ($routeProvider) {
  $routeProvider
    .when("/Home", {
      templateUrl: "Home.html?" + Math.random(),
    })
    .when("/E-commerce", {
      templateUrl: "E-commerce.html?" + Math.random(),
    })
    .when("/Login", {
      templateUrl: "login.html?" + Math.random(),
    })
    .when("/Examples", {
      templateUrl: "Examples.html?" + Math.random(),
    })
    .when("/detail/:url", {
      templateUrl: "detailProduct.html?" + Math.random(),
      controller: "myCtrl",
    })
    .when("/Cart", {
      templateUrl: "Cart.html?" + Math.random(),
      controller: "myCtrl",
    })
    .when("/demo", {
      templateUrl: "game/XO.html?" + Math.random(),
      controller: "myCtrl",
    })
    .otherwise({
      redirectTo: "/Home",
    });
});
