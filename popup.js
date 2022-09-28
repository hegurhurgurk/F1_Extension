let d=document.getElementById("db");
let c=document.getElementById("cb");
let r=document.getElementById("re");
let l=document.getElementById("lb");
//register event listeners
d.addEventListener("click", async =>{ drivers()});
r.addEventListener("click", async =>{ refresh()});
c.addEventListener("click", async =>{ constructors()});
l.addEventListener("click", async =>{ lastRace()});
function destroy(){
  //kills the content to clear the way for gen
}
//generate middle section
function gen(){
//tekes in an array and creates a table based off of those values
//format will be a title then a 2d array containing the content for the main rows
}
//handle button 1
function drivers(){
//gets the drivers from storage and sends it to gen
//backup
chrome.search.query({disposition:"NEW_TAB" ,text:"f1 standings"});

}
//handle button 2
function constructors(){
//gets the constructors from storage and then sends it to gen
//backup
chrome.search.query({tabId:t.id ,text:"f1 constructor standings"});
}
//handle button 3
function lastRace(){
//gets the last race from storage then sends it to gen
//backup
chrome.search.query({tabId:t.id ,text:"f1 last race results"});
}
//handle button 4
function favorites(){
// gets the favorites from storage then gets those driver's info from storage and sends them to gen
}
//handle button 5
function settings(){
// allows you to set your favorites 
//will use its own gen
}
//handle refresh
function refresh(){
  //create the new window

 
 // let w= chrome.windows.create({state:"minimized"});
 // let num=w.id;
 //chrome.windows.update(w.id, {focused:false});
  chrome.tabs.create({url:"https://www.formula1.com/en/results.html/2022/drivers.html"},driversRef());

  
 
}
function driversRef(t){

}


