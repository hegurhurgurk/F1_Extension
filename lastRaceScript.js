//get starting position
let StartRace = document.getElementsByClassName("resultsarchive-table");
//go to the table body
let infoRace = StartRace[0].children[1];
//get all of the rows
let dataRace = infoRace.children;
//create the container to put the info in
let restRace = [];
for (let i = 0; i < dataRace.length; i++) {
    //get the cells
    let row = dataRace[i].children;
    //create a container row
    let k = []
    for (let j = 1; j < row.length; j++) {
        //load in the cell
        k[j - 1] = row[j].innerText;
    }
    //load the cell in the table
    restRace[i] = k;
}
//set the storage
chrome.storage.sync.set({ Rest: restRace });
//gets the html element for the race name
let nameS = document.getElementsByClassName("ResultsArchiveTitle");
let name = nameS[0].innerText;
//set it in storage
chrome.storage.sync.set({ Name: name });
