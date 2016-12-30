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
    });

    /*
    .controller('PopupCtrl',function($scope, $ionicPopup, $rootScope) {
      $scope.showAlert = function() {
        var altura = parseFloat($scope.altura);
        var largura = parseFloat($scope.largura);
          $rootScope.resultado = largura*altura;
       if ($scope.altura == null || $scope.largura == null) {
        var alertPopup = $ionicPopup.alert({
         title: 'Digite valores válidos!',
       });
       } else {
        var alertPopup = $ionicPopup.alert({
         title: 'Área: ' + $rootScope.resultado + 'm²',
       });
      }
    }*/

