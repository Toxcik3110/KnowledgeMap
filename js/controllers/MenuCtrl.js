app.controller('MenuCtrl', ['$scope', '$state', function($scope, $state) {
    $scope.str = "Hello, World!";
    $scope.x = 0;
    $scope.y = 0;
    $scope.viewX = 0;
    $scope.viewY = 0;
    $scope.moveView = false;
    $scope.maxHeight = document.documentElement.clientHeight;
    $scope.maxWidth = document.documentElement.clientWidth;
    $scope.components = components.map((s) => s);
    console.log($scope.components);
    $scope.click = (e) => {
        console.log("click");
    }
    $scope.mouseDown = (e) => {
        $scope.moveView = true;
        $scope.pinX = $scope.viewX*($scope.maxWidth/50) + e.pageX//$scope.maxWidth;
        $scope.pinY = $scope.viewY*($scope.maxHeight/50) + e.pageY//$scope.maxHeight;
        console.log("down");
    }
    $scope.mouseUp = (e) => {
        if ($scope.moveView) {
            $scope.moveView = false;
            // let x = e.pageX;
            // let y = e.pageY;
            // $scope.x = x;
            // $scope.y = y;
            // $scope.viewX = ($scope.pinX - x)/($scope.maxWidth/50);
            // $scope.viewY = ($scope.pinY - y)/($scope.maxHeight/50);
        }

        console.log("up");
    }
    $scope.mouseMove = (e) => {
        let x = e.pageX;
        let y = e.pageY;
        $scope.x = x;
        $scope.y = y;
        if($scope.moveView) {
            $scope.viewX = ($scope.pinX - x)/($scope.maxWidth/50);
            $scope.viewY = ($scope.pinY - y)/($scope.maxHeight/50);
        }
        // console.log("click");
    }
    $scope.checkCoords = (x,y) => {
        if(x - $scope.viewX > 99)
            return false;
        if(y - $scope.viewY > 99)
            return false;
        return true;
    }
}]);
