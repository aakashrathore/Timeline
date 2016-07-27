var app = angular.module('timeline', ['ngDraggable', 'ngRoute']);


app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        controller:'myCtrl',
        templateUrl: './Partials/submit.html'
      })
      .when('/result', {
        controller:'myCtrl',
        templateUrl:'./Partials/result.html'
      });
}]);

app.controller('myCtrl', ['$scope', function($scope){
    $scope.view = true;
    $scope.events = [{
            yearsAgo: "13.8B",
            name: "Big Bang",
            field: "Astronomy"
        },
        {
            yearsAgo: "13.8B",
            name: "CMB Radiation",
            field: "Astronomy"
        },
        {
            yearsAgo: "13.5B",
            name: "First Light",
            field: "Astronomy"
        },
        {
            yearsAgo: "4.5B",
            name: "Earth and Sun Form", 
            field: "Geology"
        },
        {
            yearsAgo:"3.7B",
            name: "First Life",
            field: "Biology"
        },
        {
            yearsAgo: "0.02M",
            name: "Last Major Ice Age",
            field: "Geology"
        }
    ];

    $scope.droppedEvents = new Array(14);
    $scope.maxMarks = $scope.events.length;
    $scope.obtainedMarks = 0;

    for(var i=0; i<$scope.droppedEvents.length; i++){
        $scope.droppedEvents[i] = {};
        $scope.droppedEvents[i].name = ".";
        $scope.droppedEvents[i].age = "0";
    }

    $scope.droppedEvents[0].age = "15B";
    $scope.droppedEvents[1].age = "13.8B";
    $scope.droppedEvents[2].age = "13.8B";
    $scope.droppedEvents[3].age = "13.5B";
    $scope.droppedEvents[4].age = "12B";
    $scope.droppedEvents[5].age = "11.5B";
    $scope.droppedEvents[6].age = "11B";
    $scope.droppedEvents[7].age = "10B";
    $scope.droppedEvents[8].age = "8B";
    $scope.droppedEvents[9].age = "6B";
    $scope.droppedEvents[10].age = "4.5B";
    $scope.droppedEvents[11].age = "3.7B";
    $scope.droppedEvents[12].age = "100M";
    $scope.droppedEvents[13].age = "0.02M";



    $scope.onDragComplete=function(data,evt){
        console.log("Here");
       console.log("drag success, data:", data);
    };
    $scope.onDragComplete2=function(data,evt, index){
        //var index = $scope.droppedObjects1.indexOf(data);
        // console.log("here");
        // //var index = $scope.droppedEvents.indexOf(data);
        // console.log(index);
        // if(index == -1)
        //     console.log("Oops! Not Found");
        // else{
        //     $scope.droppedEvents[index].name = ".";
        //     $scope.droppedEvents[index].field = "0";
        //     console.log($scope.droppedEvents);
        // }
    };
    $scope.onDropComplete=function(data,evt, index){
        console.log("drop success, data:", data);
        if(index == -1)
            console.log("Negative index");
        else{
            //$scope.droppedEvents.splice(index, 0, data);
            //console.log("Position: " + index);
            $scope.droppedEvents[index].name = data.name;
            //console.log($scope.droppedEvents);
            $scope.droppedEvents[index].field = data.field;
            //$scope.$apply();
        }
    };

    //Fix this. Inefficient AF!
    $scope.checkAnswers = function(){
        console.log($scope.droppedEvents);
        for(var i=0; i<$scope.droppedEvents.length; i++){
            for(var j=0; j<$scope.events.length; j++){
                if($scope.droppedEvents[i].name == $scope.events[j].name){
                    if($scope.droppedEvents[i].age == $scope.events[j].yearsAgo)
                        $scope.obtainedMarks++;
                    //alert("here");
                    break;
                }
            }
        }
        console.log("you scored " + $scope.obtainedMarks);
        $scope.view = !$scope.view;
        //$window.location.href = '/result'
        //$scope.$apply(function() { $location.path("/result"); });
    }

}]);