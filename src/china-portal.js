define(function (require) {
    'use strict';

    var angular = require('angular'),
        text = require('text'),
    // moment = require('moment'),
        ChinaPortalDirective = require('china-portal/directives/china-portal-directive');

    if (!window.savapp) {
        window.savapp = {};
    }
    if (!window.savapp.currentLan) {
        window.savapp.currentLan = 'en-GB';
    }

    // moment.lang('en-en');
    var module = angular.module('portal', []);
    module.directive('chinaportal', ChinaPortalDirective);

    angular.element(document).ready(function () {
        angular.bootstrap(document, ['portal']);
    });

    // return {
    //     module: module,
    //
    //     load: function (element, options, done) {
    //         require(['css!china-portal/../styles/global'], function () {
    //             window.savapp.currentApp = 'chinaPortal';
    //             window.savapp.readyLogout = true;
    //             var newElement = document.createElement('china-portal');
    //             var tempElement = document.createElement('div');
    //             tempElement.appendChild(newElement);
    //             angular.bootstrap(newElement, [module.name]);
    //             element.appendChild(tempElement);
    //             done();
    //         })
    //     },
    //
    //     unload: function () {
    //
    //     }
    // };
});
