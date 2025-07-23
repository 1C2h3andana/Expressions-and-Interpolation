(function (){
'use Strict';

angular.module('MsgApp', [])
.controller('MsgController', MsgController);

MsgController.$inject = ['$scope'];
function MsgController($scope) {
  $scope.name = "Chandu";

  $scope.sayMessage = function () {
    return "Chandu likes to eat healthy snacks at night!";
  };
}
})();
