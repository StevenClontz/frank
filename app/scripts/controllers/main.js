'use strict';
/**
 * @ngdoc function
 * @name frankApp.controller:ChatCtrl
 * @description
 * # ChatCtrl
 * A demo of using AngularFire to manage a synchronized list,
 * adapted for virtual candle lighting functionality
 */
angular.module('frankApp')
  .controller('MainCtrl', function ($scope, fbutil, $timeout, $location, $anchorScroll) {
    // synchronize a read-only, synchronized array of messages
    $scope.messages = fbutil.syncArray('messages');

    // hide loading message; display any errors
    $scope.messages.$loaded().then(hideLoadingMessage).catch(alert);

    function resetMessage() {
      $scope.newMessage = {
        name: '',
        email: '',
        affiliation: '',
        text: ''
      };
    }

    function hideLoadingMessage() {
      $scope.hideLoading = true;
    }

    resetMessage();

    // provide a method for adding a message
    $scope.addMessage = function(submittedNewMessage) {
      if( submittedNewMessage && submittedNewMessage.name ) {
        // push a message to the end of the array
        $scope.messages.$add(submittedNewMessage)
          // reset newMessage to blank state
          .then(resetMessage)
          // display any errors
          .catch(alert);
      }
    };

    function alert(msg) {
      $scope.err = msg;
      $timeout(function() {
        $scope.err = null;
      }, 5000);
    }

    $scope.scrollToLight = function() {
      // set the location.hash to the id of
      // the element you wish to scroll to.
      $location.hash('light');

      // call $anchorScroll()
      $anchorScroll();
    };
  });
