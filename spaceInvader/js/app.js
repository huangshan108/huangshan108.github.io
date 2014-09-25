(function() {

angular.module('SIApp', [])

.controller('SICtrl', ['$scope','$interval', function ($scope,$interval) { // scope is object that corresponds to the html element
    

    $scope.spaceInvaders = [];
    $scope.score = 0;
    var num_rows = 5;
    var num_columns = 9;
    var TOTAL_COLUMNS = 20;
    var TOTAL_ROWS = 20;

    $scope.game_ended = false;
    $scope.win_or_lose = "";

    function generateSpaceInvaders() {
        for (var i = 1; i < num_rows; i++) {
            for (var j = 1; j < num_columns; j++) {
                $scope.spaceInvaders.push({
                    row:i,
                    column:j,
                    show: true
                });
            }   
        }
    }
    generateSpaceInvaders();
    $scope.tank = {
        column: Math.floor(TOTAL_COLUMNS/2),
        row: TOTAL_ROWS - 1
    };
    $scope.bullets = [];
    $scope.tankAction = function(event) {
        if(event.keyCode == 37) {
            if ($scope.tank.column > 0) {
                $scope.tank.column--;
            };
        } else if (event.keyCode == 39) {
            if ($scope.tank.column < TOTAL_COLUMNS - 1) {
                $scope.tank.column++;
            };
        } else if (event.keyCode == 32) {
            $scope.bullets.push({
                row: $scope.tank.row-1, 
                column: $scope.tank.column, 
                show: true
            });
        };
    }

    function getRightmostPosition(){ // returns column of rightmost invader
        var rightmostInvaderPosition = 0;
        for(var i=0; i<$scope.spaceInvaders.length; i++){
            if ($scope.spaceInvaders[i].show && $scope.spaceInvaders[i].column > rightmostInvaderPosition){
                rightmostInvaderPosition = $scope.spaceInvaders[i].column;
            }
        }
        return rightmostInvaderPosition;
    }
    function getLeftmostPosition(){ // returns column of rightmost invader
        var leftmostInvaderPosition = TOTAL_COLUMNS-1;
        for(var i=0; i<$scope.spaceInvaders.length; i++){
            if ($scope.spaceInvaders[i].show && $scope.spaceInvaders[i].column < leftmostInvaderPosition){
                leftmostInvaderPosition = $scope.spaceInvaders[i].column;
            }
        }
        return leftmostInvaderPosition;
    }
    function getBottommostPosition(){ // returns row of the bottommost invader
        var bottommostInvaderPosition = 0;
        for(var i=0; i<$scope.spaceInvaders.length; i++){
            if ($scope.spaceInvaders[i].show && $scope.spaceInvaders[i].top > bottommostInvaderPosition){
                bottommostInvaderPosition = $scope.spaceInvaders[i].top;
            }
        }
        return bottommostInvaderPosition;
    }

    var direction = 1;
    var tick = 0;
    $interval(function(){
        var i;
        if (tick % 4 == 0) {
            if (getBottommostPosition() >= TOTAL_ROWS-1){
                $scope.win_or_lose = "You lost!";
                $scope.game_ended = true;
            }
            if (direction == 1 && getRightmostPosition() >= TOTAL_COLUMNS-1){
                for(i=0; i<$scope.spaceInvaders.length; i++){
                    $scope.spaceInvaders[i].row++;
                }
                direction = -1;
            }
            else if (direction == -1 && getLeftmostPosition() <= 0){
                for(i=0; i<$scope.spaceInvaders.length; i++){
                    $scope.spaceInvaders[i].row++;
                }
                direction = 1;
            }
            else {
                for(i=0; i<$scope.spaceInvaders.length; i++){
                    $scope.spaceInvaders[i].column += direction;
                }
            }
        }
        for (i = $scope.bullets.length-1; i >= 0; i--) {
            if ($scope.bullets[i].row < 0) {
                $scope.bullets.splice(i, 1);
            } else {
                $scope.bullets[i].row--;
            }
            for (var j=0; j<$scope.spaceInvaders.length; j++){
                if($scope.bullets[i]){
                    if($scope.spaceInvaders[j].show && $scope.bullets[i].row == $scope.spaceInvaders[j].row && 
                    $scope.bullets[i].column == $scope.spaceInvaders[j].column){ // we hit something with a bullet
                        $scope.bullets[i].show = false;
                        $scope.spaceInvaders[j].show = false;
                        $scope.score++;
                        if ($scope.score == (num_columns-1)*(num_rows-1)){
                            $scope.win_or_lose = "You won!";
                            $scope.game_ended = true;
                        }
                        $scope.bullets.splice(i, 1);
                    }
                }
            }
        }
        tick++;
    }, 100);



}]);

})();