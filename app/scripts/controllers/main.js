'use strict';

/**
 * @ngdoc function
 * @name untitledApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the untitledApp
 */
angular.module('untitledApp')
  .controller('MainCtrl', function () {
  })
  .directive('scrollToItem', function() {
    return {
      restrict: 'A',
      scope: {
        scrollTo: "@"
      },
      link: function(scope, $elm,attr) {

        $elm.on('click', function() {
          $('html,body').animate({scrollTop: $(scope.scrollTo).offset().top }, "slow");
        });
      }
    }});
