var app = angular.module('timeline',[]);

app.controller('myCtrl', ['$scope', function($scope){

    // DOM element where the Timeline will be attached
    var container = document.getElementById('visualization');

    $scope.total = 6;
    $scope.marks = 0;
    $scope.display = true;
    // Create a DataSet (allows two way data-binding)
    var solution = new vis.DataSet([
        {id: 0, content: 'Big Bang', start: 13800000000},
        {id: 1, content: 'CMB Radiation', start: 13800000000},
        {id: 2, content: 'First Light', start: 13500000000},
        {id: 3, content: 'AGN Peak', start: 10000000000},
        {id: 4, content: 'Earth Forms', start: 4500000000},
        {id: 5, content: 'Hominids', start: 2000000}
    ]);
    $scope.data = [{id: 0, content: 'Big Bang', start: 13800000000, className:'btn btn-info'},
        {id: 1, content: 'CMB Radiation', start: 0, className:'btn btn-info'},
        {id: 2, content: 'First Light', start: 0, className:"btn btn-info"},
        {id: 3, content: 'AGN Peak', start: 10000000000, className:"btn btn-info"},
        {id: 4, content: 'Earth Forms', start: 4500000000, className:"btn btn-warning"},
        {id: 5, content: 'Hominids', start: 0, className:"btn btn-danger"}];

    // var items = new vis.DataSet([
    // 	{id: 0, content: 'Big Bang', start: 13800000000, className:'btn btn-info'},
    // 	{id: 1, content: 'CMB Radiation', start: 0, className:'btn btn-info'},
    // 	{id: 2, content: 'First Light', start: 0, className:"btn btn-info"},
    // 	{id: 3, content: 'AGN Peak', start: 10000000000, className:"btn btn-info"},
    // 	{id: 4, content: 'Earth Forms', start: 4500000000, className:"btn btn-warning"},
    // 	{id: 5, content: 'Hominids', start: 0, className:"btn btn-danger"}
    // ]);

    var datasetOptions = {};
    var items = new vis.DataSet(datasetOptions);

    $scope.add = function(index){
        console.log(new Date(new Number($scope.data[index].start)).getTime());
        $scope.data[index].start = new Date(new Number($scope.data[index].start)).getTime();
        console.log($scope.data[index]);
        items.add($scope.data[index]);
        $scope.data.splice(index, 1);
    }
    // Configuration for the Timeline
    var options = {
        format:{
            minorLabels: {
                millisecond:'x',
                second:     'x',
                minute:     'x',
                hour:       'x',
                weekday:    'x',
                day:        'x',
                month:      'x',
                year:       'x'
            },
            majorLabels: {
                millisecond:'',
                second:     '',
                minute:     '',
                hour:       '',
                weekday:    '',
                day:        '',
                month:      '',
                year:       ''
            }
        },
        showMajorLabels: false,
        start: 0,
        end: 14000000000,
        min:0,
        max:14000000000,
        rtl: true,
        zoomMin:10,
        itemsAlwaysDraggable: true,
        minHeight: '300px',
        editable: {
            updateTime: true
        }
    };

    // Create a Timeline
    var timeline = new vis.Timeline(container, items, options);
    timeline.getItemRange();

// add event listener
// 	timeline.on('click', function (properties) {
// 		console.log(properties);
// 	});
    $scope.submit = function(){
        //console.log("Here");
        $scope.display = !$scope.display;
        //console.log(items._data[0]);
        for(var i=0; i<6; i++)
        {
            if((new Date(items._data[i].start).getTime()) == new Date(solution._data[i].start).getTime())
                $scope.marks++;
        }

    }
}]);