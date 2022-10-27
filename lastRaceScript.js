{
    let StartRace= document.getElementsByClassName("resultsarchive-table");
    let infoRace= StartRace[0].children[1];
    let dataRace=infoRace.children;;
    let restRace = [];
    for(let i=0;i<dataRace.length;i++ ){
       let row= dataRace[i].children;
       let k=[]
       for(let j=1;j<row.length;j++){
          k[j-1]=row[j].innerText;
       }
       restRace[i]=k;
    
    }
    chrome.storage.sync.set({ Rest: restRace });
    let nameS=document.getElementsByClassName("ResultsArchiveTitle");
    let name=nameS[0].innerText;
    chrome.storage.sync.set({ Name: name });
    //chrome.tabs.remove(0);
    
    
    
    //}
    //);
    //get the inner html of the class
    //parse the inner html
    //save the parsed data
    }