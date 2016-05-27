define(function (require) {
    'use strict';
    var template = require('text!china-portal/directives/templates/china-portal-directive.html'),
        ChinaPortalController = require('china-portal/controllers/china-portal-controller');

    return function () {
        return {
            template: template,
            restrict: 'EA',
            scope: {
                name: '='
            },
            controller: ['$scope', '$document',  ChinaPortalController ]
        };
    };
});
