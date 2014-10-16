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
  .controller('ChatCtrl', function ($scope, fbutil, $timeout) {
    // synchronize a read-only, synchronized array of messages
    $scope.messages = fbutil.syncArray('messages');

    // display any errors
    $scope.messages.$loaded().catch(alert);

    function resetMessage() {
      $scope.newMessage = {
        name: '',
        email: '',
        affiliation: '',
        text: ''
      };
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
  });
