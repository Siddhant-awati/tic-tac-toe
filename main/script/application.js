var gameApp = angular.module('gameApp', []);


gameApp.controller('gameController', ['$scope', function($scope){
  $scope.board = [
    [ { value: '-' }, { value: '-' }, { value: '-' } ],
    [ { value: '-' }, { value: '-' }, { value: '-' } ],
    [ { value: '-' }, { value: '-' }, { value: '-' } ]
  ];

  $scope.reset = function() {
    $scope.board = [
      [ { value: '-' }, { value: '-' }, { value: '-' } ],
      [ { value: '-' }, { value: '-' }, { value: '-' } ],
      [ { value: '-' }, { value: '-' }, { value: '-' } ]
    ];
    
    $scope.currentPlayer = 'X';
    $scope.winner = false;
    $scope.cat = false;
  };
  
  $scope.reset();
  
  $scope.cellClicked = function(cell) {
    return cell.value !== '-';
  };
  
  var checkForMatch = function(cell1, cell2, cell3) {
    return cell1.value === cell2.value && 
           cell1.value === cell3.value &&
           cell1.value !== '-';
  };
  
  var checkForEndOfGame = function() {
    //$scope.winner = rowMatch || columnMatch || diagonalMatch;
    return $scope.winner || $scope.cat;
  };
  
  $scope.move = function(cell) {
    cell.value = $scope.currentPlayer;
    if (checkForEndOfGame() === false) {
      $scope.currentPlayer = $scope.currentPlayer === 'X' ? 'O' : 'X';
    }
  };
}])

 