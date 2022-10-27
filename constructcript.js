{
    let StartConst= document.getElementsByClassName("resultsarchive-table");
    let infoConst= StartConst[0].children[1];
    let dataConst=infoConst.children;;
    let constr = [];
    for(let i=0;i<dataConst.length;i++ ){
       let row= dataConst[i].children;
       let k=[]
       for(let j=1;j<row.length;j++){
          k[j-1]=row[j].innerText;
       }
       constr[i]=k;
    
    }
    chrome.storage.sync.set({ 'Constr': constr });
    //chrome.tabs.remove(0);
    
    
    
    //}
    //);
    //get the inner html of the class
    //parse the inner html
    //save the parsed data
    }