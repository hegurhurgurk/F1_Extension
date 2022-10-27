let color = '#3aa757';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log('Default background color set to %cgreen', `color: ${color}`);
});
//chrome.storage.onChanged.addListener(()=>{
 // chrome.tabs.getCurrent(function(tab) {
   // chrome.tabs.remove(tab.id, function() { });
   // window.alert("a");
//});

//});
