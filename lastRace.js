{
let Starts= document.getElementsByClassName("resultsarchive-table");
    let info= Starts[0].children[1];
    let l=info.children;
    let link=l[l.length-1];
    let a=link.children[1];
    let b=a.children[0].href;
    chrome.storage.sync.set({ LR: b });
}