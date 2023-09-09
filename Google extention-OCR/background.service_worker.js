// Event listener for extension installation or update
chrome.runtime.onInstalled.addListener(function () {
  console.log('Extension installed or updated.');
});

// Event listener for receiving messages from other extension components
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  console.log('Message received:', message);

  // Perform some action based on the message
  if (message.action === 'doSomething') {
    // Do something
    console.log('Doing something...');
    sendResponse({ result: 'Action completed.' });
  }
});

// Event listener for browser action button click
chrome.action.onClicked.addListener(function (tab) {
  console.log('Browser action button clicked.');

  // Perform some action on the clicked tab
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: () => {
      console.log('Executing script on the clicked tab.');
    },
  });
});
