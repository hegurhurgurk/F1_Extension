{
let Start= document.getElementsByClassName("resultsarchive-table");
let info= Start[0].children[1];
let data=info.children;;
let drivers = [];
for(let i=0;i<data.length;i++ ){
   let row= data[i].children;
   let k=[]
   for(let j=1;j<row.length;j++){
      k[j-1]=row[j].innerText;
   }
   drivers[i]=k;

}
chrome.storage.sync.set({ Drivers: drivers });
//chrome.tabs.remove(0);



//}
//);
//get the inner html of the class
//parse the inner html
//save the parsed data
}