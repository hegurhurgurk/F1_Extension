//start at the table
let Start = document.getElementsByClassName("resultsarchive-table");
//cet the table content
let info = Start[0].children[1];
//get the rows
let data = info.children;
//create a container to put everything in
let drivers = [];
for (let i = 0; i < data.length; i++) {
   //get the current row
   let row = data[i].children;
   //create a container row
   let k = []
   for (let j = 1; j < row.length; j++) {
      //put the cell in the container row
      k[j - 1] = row[j].innerText;
   }
   //load in the row
   drivers[i] = k;
}
//set the storage
chrome.storage.sync.set({ Drivers: drivers });
