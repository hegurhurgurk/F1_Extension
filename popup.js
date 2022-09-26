let d=document.getElementById("db");
let c=document.getElementById("cb");
//register event listeners
d.addEventListener("click", async =>{ drivers()});

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
d.style.backgroundColor='#3aa757';
}
//handle button 2
function constructors(){
//gets the constructors from storage and then sends it to gen
}
//handle button 3
function lastRace(){
//gets the last race from storage then sends it to gen
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
// updates the stored values
// class name needed = tsp-trtb tsp-trr tsp-cbd tsp-hbd
}

