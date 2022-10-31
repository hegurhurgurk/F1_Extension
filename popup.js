
//set the html objects
let Drivers = document.getElementById("db");
let Construct = document.getElementById("cb");
let r = document.getElementById("re");
let l = document.getElementById("lb");
//register event listeners
Drivers.addEventListener("click", () => { drivers() });
r.addEventListener("click", () => { refresh() });
Construct.addEventListener("click", () => { constructors() });
l.addEventListener("click", () => { lastRace() });
//builds the drivers tab
function drivers() {
  //sets the active tab
  Drivers.className = "active";
  Construct.className = "na";
  l.className = "na";
  //gets the driver info from storage
  chrome.storage.sync.get("Drivers", (results) => {
    //sets content and the results
    let content = document.getElementById("content");
    let list = results.Drivers;
    //clear out any old stuff
    clearSpace();
    //builds the table header
    let items = ["Position", "Driver", "Nationality", "Team", "Points"];
    buildHeader(items, content);
    //builds the table content with info from storage
    for (i = 0; i < list.length; i++) {
      let r = document.createElement("tr");
      for (j = 0; j < list[i].length - 1; j++) {
        let cell = document.createElement("td");
        let cont = document.createTextNode(list[i][j]);
        cell.appendChild(cont);
        r.appendChild(cell);
      }
      content.appendChild(r);
    }
  });

}
//builds the constructors tab
function constructors() {
  //sets the active tab
  Drivers.className = "na";
  Construct.className = "active";
  l.className = "na";
  //get the info from storage
  chrome.storage.sync.get("Constr", (results) => {
    //sets content and the results
    let content = document.getElementById("content");
    let list = results.Constr;
    //clears out any old info
    clearSpace();
    let items = ["Position", "Team", "Points"];
    //builds the table header
    buildHeader(items, content);
    //create the table content from the info
    for (i = 0; i < list.length; i++) {
      let r = document.createElement("tr");
      for (j = 0; j < list[i].length; j++) {
        let cell = document.createElement("td");
        let cont = document.createTextNode(list[i][j]);
        cell.appendChild(cont);
        r.appendChild(cell);
      }
      content.appendChild(r);
    }
  });
  //loop through and build each row
}
//cunstructs the last race tab
function lastRace() {
  //sets the active tab
  Drivers.className = "na";
  Construct.className = "na";
  l.className = "active";
  //get the name
  chrome.storage.sync.get("Name", (results) => {
    //define the content and name for reference
    let content = document.getElementById("content");
    let nm = results.Name;
    //clears any previously loded content
    clearSpace();
    //creates the title
    let R = document.createElement("a");
    let Rcont = document.createTextNode(nm);
    R.appendChild(Rcont);
    R.className = "Title";
    //puts it tn the right place
    content.parentNode.insertBefore(R, content);
    //defines the categories we need and builds them
    let list = ["Position", "Number", "Driver", "Team", "Laps", "Time", "Points"]
    buildHeader(list, content);
  });
  //gets the results from storage
  chrome.storage.sync.get("Rest", (results) => {
    let list = results.Rest;
    //builds the final table
    for (i = 0; i < list.length; i++) {
      let r = document.createElement("tr");
      for (j = 0; j < list[i].length - 1; j++) {
        let cell = document.createElement("td");
        let cont = document.createTextNode(list[i][j]);
        cell.appendChild(cont);
        r.appendChild(cell);
      }
      //puts the table in content
      content.appendChild(r);
    }
  });
}
//fetches new information from the internet
function refresh() {
  //gets the current date for future years
  let d = new Date();
  //creates a new tab for the drivers in the background
  chrome.tabs.create({ url: "https://www.formula1.com/en/results.html/" + d.getFullYear() + "/drivers.html", active: false }, async (tab) => {
    //once the tab is created execute the drive script
    await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ["driveScript.js"],
    });
    //once the script is done kill the tab
    chrome.tabs.remove(tab.id);
  });
  //same for the constructors
  chrome.tabs.create({ url: "https://www.formula1.com/en/results.html/" + d.getFullYear() + "/team.html", active: false }, async (tab) => {
    await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ["constructcript.js"],
    });
    chrome.tabs.remove(tab.id);

  });
  //almost the same here as well but we first need to get what the current race is
  chrome.tabs.create({ url: "https://www.formula1.com/en/results.html/" + d.getFullYear() + "/races.html", active: false }, async (tab) => {
    await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      //this script will get a link to the most recent race
      files: ["GetLink.js"],
    });
    chrome.tabs.remove(tab.id);
    //now that we have the most recent race use that link with the same process as the last 2
    chrome.storage.sync.get("LR", (info) => {
      let link = info.LR;
      chrome.tabs.create({ url: link, active: false }, async (tab) => {
        await chrome.scripting.executeScript({
          target: { tabId: tab.id },
          files: ["lastRaceScript.js"]
        });
        chrome.tabs.remove(tab.id);
      });
    });
  });
}
//builds the table header
function buildHeader(catagories, content) {
  let row = document.createElement("tr");
  for (let i = 0; i < catagories.length; i++) {
    let text = document.createTextNode(catagories[i]);
    let box = document.createElement("td");
    box.appendChild(text);
    row.appendChild(box);
  }
  content.appendChild(row);
}
//clears out any previous content
function clearSpace() {
  //checks if there was a previous title and if so destroys it
  let titl = document.getElementsByClassName("Title");
  if (titl.length > 0) {
    content.parentNode.removeChild(titl[0]);
  }
  //if there was a previous table destroy it
  if (content.hasChildNodes) {
    let k = content.childNodes.length;
    for (i = 0; i < k; i++) {
      let dead = content.childNodes[0];

      content.removeChild(dead);
    }
  }
}
