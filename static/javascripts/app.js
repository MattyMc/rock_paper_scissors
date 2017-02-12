console.log("Here");

// Define the `phonecatApp` module
var rockPaperScissorsApp = angular.module('rockPaperScissorsApp', ['ngFitText']);


// Define the FormController to handle button clicks
rockPaperScissorsApp.controller('GameController', function FormController($scope, $http) {
  var guesses = [];
  var user_id = generateUUID();
  var server_guess;
  $scope.view = { disableButtons: true, usingML: false, gameStatus: "----" };

  $scope.view.disableButtons = false;
  server_guess = 0;

  $scope.play = function(guess) {
    // add guess to front array
    guesses.unshift(guess);
    console.log("User played: " + guess + " : Server played: " + server_guess);

    // sends request
    $http.post("/play", requestObject())
    .then(function(response) {
      r = response.data;
      $scope.view.gameStatus = r.userOutcome;
      console.log("User: " + r.userOutcome);

      // since next_guess is a probability map
      console.log(r.next_guess);
      server_guess = next_guess(r.next_guess);
    });
  }





  // formulates the request object
  //  -> maps "Rock" to 0 (etc)
  //  -> includes five guesses
  //  -> attaches user_id
  //  -> includes server_guess
  function requestObject() {
    return {
      user_id: user_id,
      server_guess: server_guess,
      guesses: guesses.slice(0, 5)
    }
  }

  // accepts input: [0.3, 0.2, 0.5]
  //  returns a random element proportional to probabilities
  function next_guess(probability_array) {
    var serverGuess = null;

    // only play if guess if probability > 65%
    if(Math.max.apply(Math, probability_array) < 0.65) {
      var arr = [0, 1, 2];
      console.log("random guess");
      serverGuess = arr[Math.floor(Math.random()*arr.length)];
    }

    var temp = 0;
    var rand = Math.random();
    for (var i = 0; i < 3; i++) {
      temp = temp + probability_array[i];
      if (rand < temp) { serverGuess = i; break; }
    }
    // convert the server's prediction into the winning play
    //  ex. if the server predicts the user will play rock, play paper:
    return (serverGuess + 1) % 3;
  }

  // generates unique identifiers for users
  function generateUUID(){
    var d = new Date().getTime();
    if(window.performance && typeof window.performance.now === "function"){
      d += performance.now(); //use high-precision timer if available
    }
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = (d + Math.random()*16)%16 | 0;
      d = Math.floor(d/16);
      return (c=='x' ? r : (r&0x3|0x8)).toString(16);
    });
    return uuid;
  }
});
