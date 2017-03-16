'use strict';
/**
 * [ChartController build the chart depending on data value]
 * @param {object} $scope   [scope of the controller]
 * @param {object} Constant [config file maintained for data]
 */
function ChartController($scope, Constant) {
    var vm = this;
    /**
     * [initialization function]
     * @return {[type]} [description]
     */
    $scope.init = function() {
            $scope.chartParams = {};
            $scope.myDataSource = {};
            $scope.flag = false;
            /**
             * [describes the qualitative data]
             * @type {Array}
             */
            $scope.dimensions = ['Brand', 'Category'];
            /**
             * [describes the quantitative data]
             * @type {Array}
             */
            $scope.measures = ['Revenue', 'Sales', 'Order'];
            /**
             * [Describes the chart type: Bar or Coloumn]
             * @type {Array}
             */
            vm.filterType = [{
                value: 'bar2d',
                label: 'Bar'
            }, {
                value: 'column2d',
                label: 'Coloumn'
            }];
            vm.filterList = vm.filterType[0];
        }
        /**
         * [Generate chart function]
         * @return {[type]} [description]
         */
    $scope.generateChart = function() {
            if ($scope.chartParams.dimension && $scope.chartParams.measure) {
                /**
                 * [matching the current value with the data stored]
                 * @param  {object} val  [each data object in the array]
                 */
                angular.forEach(Constant.ChartData, function(val, key) {
                    if (val.params.dimension === $scope.chartParams.dimension && val.params.measure === $scope.chartParams.measure) {
                        $scope.myDataSource = {
                            chart: val.chart,
                            data: val.data
                        }
                    }
                });
            }
        }
        /**
         * [Dimension drop area functionality]
         * @param  {string} data [The X-axis Parameter dropped]
         * @param  {object} evt  [drop event]
         */
    $scope.onDropCompleteDimensions = function(data, evt) {
            console.log(data, typeof(data), evt, typeof(evt));
            $scope.dimensionDropped = data;
            $scope.chartParams.dimension = $scope.dimensionDropped;
            $scope.generateChart();
        }
        /**
         * [Measures drop area functionality]
         * @param  {string} data [The Y-axis parameter dropped]
         * @param  {object} evt  [drop event]
         */
    $scope.onDropCompleteMeasures = function(data, evt) {
            $scope.measuresDropped = data;
            $scope.chartParams.measure = $scope.measuresDropped;
            $scope.generateChart();
        }
        /**
         * [Drag functiom]
         * @param  {string} data [The data which is dragged]
         * @param  {object} evt  [drag event]
         * @param  {string} val  [type of data]
         */
    $scope.onDragComplete = function(data, evt, val) {
        console.log('in drag:', val);
        switch (val) {
            case 'dimension':
                $scope.onDropCompleteDimensions(data, evt);
                break;
            case 'measure':
                $scope.onDropCompleteMeasures(data, evt);
                break;
        }
    }
}

ChartController.$inject = ['$scope', 'Constant'];
module.exports = ChartController;
