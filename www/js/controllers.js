angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
})

.controller ('MyCtrl' , function MyCtrl($scope, $ionicHistory) {
  $scope.myGoBack = function() {
    $ionicHistory.goBack();
  }})

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
 }
});

