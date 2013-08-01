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

      var piglatinize = function( word ) {
        if ( !word ) return "";

        var pattern = /^([^aeiou]+)(.+)/i
        var result = word.match( pattern );

        if ( !result ){
          return word + "ay";
        }

        return result[1] ? result[2] + result[1] + "ay" : word + "ay";
      };

      if ( !text ) return;

      var words = text.replace(/[^A-Za-z\s]/g, '').split(/\s+/);
      var latinized_words = [];

      for( var i = 0; i < words.length; i++ ){
        latinized_words.push( piglatinize( words[i] ) );
      }

      return latinized_words.join(" ");
    }
  });
