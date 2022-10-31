//start at the table
let StartConst = document.getElementsByClassName("resultsarchive-table");
//go to the table content
let infoConst = StartConst[0].children[1];
//get the rows
let dataConst = infoConst.children;
//create a container to put everything in
let constr = [];
for (let i = 0; i < dataConst.length; i++) {
    //get the current row
    let row = dataConst[i].children;
    //create a container row
    let k = []
    for (let j = 1; j < row.length; j++) {
        //put the current cell into the container row
        k[j - 1] = row[j].innerText;
    }
    //put the container row in the container
    constr[i] = k;
}
//set the storage
chrome.storage.sync.set({ 'Constr': constr });
