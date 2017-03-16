'use strict';

module.exports = angular.module('ChartTask.modules.public', ['ui.router'])
    .config(require('./router/router'))
    .constant('Constant', require('./config/constant'))
    .controller('ChartController', require('./controllers/ChartController'))
