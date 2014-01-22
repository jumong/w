/*!
 * Webogram v0.1 - messaging web application for MTProto
 * https://github.com/zhukov/webogram
 * Copyright (C) 2014 Igor Zhukov <igor.beatle@gmail.com>
 * https://github.com/zhukov/webogram/blob/master/LICENSE
 */

chrome.app.runtime.onLaunched.addListener(function(launchData) {
  chrome.app.window.create('../index.html', {
    bounds: {
      width: 1100,
      height: 700
    },
    minWidth: 1100,
    minHeight: 700,
    frame: 'chrome'
  });
});