chrome.browserAction.onClicked.addListener(() => {
    chrome.tabs.executeScript( {
        file: 'index.js'
    })
});
