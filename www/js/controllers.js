    angular.module('starter.controllers', ['ionic'])

    .controller('DashCtrl', function($scope) {
    })

    .controller ('MyCtrl' , function MyCtrl($scope, $ionicHistory) {
      $scope.myGoBack = function() {
        $ionicHistory.goBack();
      }})

    .controller('AbrirLink', function ($scope) {
      $scope.openInAppBrowser = function(url)
      {
       window.open(url,'_blank', 'location=yes'); 
     };
   })


/*    .controller('PopupCtrl',function($scope, $ionicPopup, $rootScope) {
      $scope.showAlert = function() {
        var alertPopup = $ionicPopup.alert({
         templateUrl: '#/template1'
       });
      }
    })*/



    .controller('CalculoCtrl', function($scope){
      var area = 0;
      $scope.area = function() {
        var result = 0;
        if (parseFloat($scope.altura) >= 0 && parseFloat($scope.largura) >= 0) {
          result =  parseFloat($scope.altura)*parseFloat($scope.largura);
          area = result;
        }
        return result;
      }

      $scope.mostrar = false;
      $scope.mostrar2 = false;
      $scope.mostrar3 = false;
      $scope.mostrar4 = false;
      $scope.mostrar5 = false;
      $scope.mostrar6 = false;

      $scope.toggle = function () {
        $scope.mostrar = !$scope.mostrar;
      };
      $scope.toggle2 = function () {
        $scope.mostrar2 = !$scope.mostrar2;
      };
      $scope.toggle3 = function () {
        $scope.mostrar3 = !$scope.mostrar3;
      };
      $scope.toggle4 = function () {
        $scope.mostrar4 = !$scope.mostrar4;
      };
      $scope.toggle5 = function () {
        $scope.mostrar5 = !$scope.mostrar5;
      };
      $scope.toggle6 = function () {
        $scope.mostrar6 = !$scope.mostrar6;
      };
    });

