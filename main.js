chrome.app.runtime.onLaunched.addListener(function(data) {
  // Open main window
  chrome.app.window.create('index.html',
    { id: 'main',
      innerBounds: {width: 1030, height: 704}
    });
});
