/* jshint comelcase:false */
define(function (require) {
    'use strict';

    return ($scope, $document)=>{
        new class ChinaPortalController {

            onKeyxx() {
                alert('onkkkkkkk');
            };

            constructor($scope, $document) {
                this.scope = $scope;
                this.document = $document;
                this.scope.name = 'asd';
                this.scope.onKeyxx = this.onKeyxx;
            }
        }($scope, $document)
    };

});
