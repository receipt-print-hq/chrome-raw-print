chrome.app.runtime.onLaunched.addListener(function(data) {
  // Open main window
  chrome.app.window.create('index.html',
    { id: 'main',
      innerBounds: {width: 600, height: 600}
    });
});
