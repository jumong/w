/*!
 * Webogram v0.1 - messaging web application for MTProto
 * https://github.com/zhukov/webogram
 * Copyright (C) 2014 Igor Zhukov <igor.beatle@gmail.com>
 * https://github.com/zhukov/webogram/blob/master/LICENSE
 */

'use strict';

// window._testMode = 1;


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'ngAnimate',
  'ngSanitize',
  'ui.bootstrap',
  'myApp.filters',
  'myApp.services',
  'mtproto.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$locationProvider', '$routeProvider', '$compileProvider', function($locationProvider, $routeProvider, $compileProvider) {

  var icons = {}, reverseIcons = {}, i, j, hex, name, dataItem,
      ranges = [[0x1f600, 0x1f637], [0x261d, 0x263f], [0x270a, 0x270c], [0x1f446, 0x1f450]];

  for (j in ranges) {
    for (i = ranges[j][0]; i <= ranges[j][1]; i++) {
      hex = i.toString(16);
      if (dataItem = Config.Emoji[hex]) {
        name = dataItem[1][0];
        icons[':' + name + ':'] = hex + '.png';
        reverseIcons[name] = dataItem[0];
      }
    }
  }

  $.emojiarea.path = 'vendor/gemoji/images';
  $.emojiarea.icons = icons;
  $.emojiarea.reverseIcons = reverseIcons;

  $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|file|blob|filesystem|chrome-extension):|data:image\//);
  $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|file|mailto|blob|filesystem|chrome-extension):|data:image\//);


  // $locationProvider.html5Mode(true);
  $routeProvider.when('/', {templateUrl: 'partials/welcome.html', controller: 'AppWelcomeController'});
  $routeProvider.when('/login', {templateUrl: 'partials/login.html?1', controller: 'AppLoginController'});
  $routeProvider.when('/im', {templateUrl: 'partials/im.html?2', controller: 'AppIMController', reloadOnSearch: false});
  $routeProvider.otherwise({redirectTo: '/'});

}]);
