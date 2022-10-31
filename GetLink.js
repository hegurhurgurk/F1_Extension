//start at the result table
let Starts = document.getElementsByClassName("resultsarchive-table");
//get the table content
let info = Starts[0].children[1];
//get the rows
let l = info.children;
//go to the last row
let link = l[l.length - 1];
//get the cell with the link
let a = link.children[1];
let b = a.children[0].href;
//store it
chrome.storage.sync.set({ LR: b });
