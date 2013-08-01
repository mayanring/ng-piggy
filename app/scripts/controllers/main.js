'use strict';

angular.module('ngPiggyApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  })
  .filter('piglatinize', function(){
    return function(text) {
      if ( !text ) return;

      var pattern = /^([^aeiou]+)(.+)/i
      var result = text.match( pattern );

      if ( !result ){
        return text + "ay";
      }

      return result[1] ? result[2] + result[1] + "ay" : text + "ay";
    }
  });
