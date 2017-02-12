console.log("HelloWorld");

// Define the `phonecatApp` module
var rockPaperScissorsApp = angular.module('rockPaperScissorsApp', ['ngFitText']);

// Define the `PhoneListController` controller on the `phonecatApp` module
rockPaperScissorsApp.controller('FormController', function FormController($scope) {
  $scope.activeQuestion = 1;
  $scope.nextQuestion = function() {
    $scope.activeQuestion++;
  }
});
