let Drivers=document.getElementById("db");
let data=document.getElementById("cb");
let r=document.getElementById("re");
let l=document.getElementById("lb");
//register event listeners
Drivers.addEventListener("click", () =>{ drivers()});
r.addEventListener("click", () =>{ refresh()});
data.addEventListener("click", () =>{ constructors()});
l.addEventListener("click", () =>{ lastRace()});
function drivers(){
//gets the drivers from storage and sends it to gen
//backup
Drivers.className="active";
data.className="na";
l.className="na";
chrome.storage.sync.get("Drivers",  (results)=>{
//build the header
let content=document.getElementById("content");
let list= results.Drivers;
//window.alert(list.length);
let titl=document.getElementsByClassName("Title");
  if(titl.length>0){
    content.parentNode.removeChild(titl[0]);
  }
if (content.hasChildNodes){
  let k=content.childNodes.length;
  for(i=0;i<k;i++){
  let dead=content.childNodes[0];

  content.removeChild(dead);
  }
}
let row= document.createElement("tr");
let pos=document.createElement("td");
let contp = document.createTextNode("Position")
pos.appendChild(contp);
row.appendChild(pos);
let dr=document.createElement("td");
let contdr=document.createTextNode("Driver");
dr.appendChild(contdr);
row.appendChild(dr);
let nat=document.createElement("td");
let contnat=document.createTextNode("Nationality");
nat.appendChild(contnat);
row.appendChild(nat);
let tea=document.createElement("td");
let conttea=document.createTextNode("Team");
tea.appendChild(conttea);
row.appendChild(tea);
let pts=document.createElement("td");
let contpts=document.createTextNode("Points");
pts.appendChild(contpts);
row.appendChild(pts);
content.appendChild(row);
for(i=0;i<list.length;i++){
  let r=document.createElement("tr");
  for (j=0;j<list[i].length-1;j++){
    let cell=document.createElement("td");
    let cont=document.createTextNode(list[i][j]);
    cell.appendChild(cont);
    r.appendChild(cell);
  }
  content.appendChild(r);
}
});
//loop through and build each row
}
function constructors(){
  Drivers.className="na";
  data.className="active";
  l.className="na";
chrome.storage.sync.get("Constr",  (results)=>{
  //build the header
  let content=document.getElementById("content");
  let list= results.Constr;
  //window.alert(list.length);
  let titl=document.getElementsByClassName("Title");
  if(titl.length>0){
    content.parentNode.removeChild(titl[0]);
  }
  if (content.hasChildNodes){
    let k=content.childNodes.length;
    for(i=0;i<k;i++){
    let dead=content.childNodes[0];
  
    content.removeChild(dead);
    }
  }
  let row= document.createElement("tr");
  let pos=document.createElement("td");
  let contp = document.createTextNode("Position")
  pos.appendChild(contp);
  row.appendChild(pos);
  let dr=document.createElement("td");
  let contdr=document.createTextNode("Team");
  dr.appendChild(contdr);
  row.appendChild(dr);
  let pts=document.createElement("td");
  let contpts=document.createTextNode("Points");
  pts.appendChild(contpts);
  row.appendChild(pts);
  content.appendChild(row);
  for(i=0;i<list.length;i++){
    let r=document.createElement("tr");
    for (j=0;j<list[i].length;j++){
      let cell=document.createElement("td");
      let cont=document.createTextNode(list[i][j]);
      cell.appendChild(cont);
      r.appendChild(cell);
    }
    content.appendChild(r);
  }
  });
  //loop through and build each row
}
function lastRace(){
  Drivers.className="na";
data.className="na";
l.className="active";
chrome.storage.sync.get("Name", (results)=>{
  let content=document.getElementById("content");
  let nm=results.Name;
  //window.alert(results.Name);
  //window.alert(list.length);
  if (content.hasChildNodes){
    let k=content.childNodes.length;
    for(i=0;i<k;i++){
    let dead=content.childNodes[0];
      
    content.removeChild(dead);
    }
  }
  let R=document.createElement("a");
  let Rcont=document.createTextNode(nm);
  R.appendChild(Rcont);
  R.className="Title";
  content.parentNode.insertBefore(R,content);
  //content.appendChild(R);
  let row= document.createElement("tr");
  let pos=document.createElement("td");
  let contp = document.createTextNode("Position")
  pos.appendChild(contp);
  row.appendChild(pos);
  let nu=document.createElement("td");
  let contnu = document.createTextNode("Number")
  nu.appendChild(contnu);
  row.appendChild(nu);
  let dr=document.createElement("td");
  let contdr=document.createTextNode("Driver");
  dr.appendChild(contdr);
  row.appendChild(dr);
  let tm=document.createElement("td");
  let tmcont=document.createTextNode("Team");
  tm.appendChild(tmcont);
  row.appendChild(tm);
  let lp=document.createElement("td");
  let lpcont=document.createTextNode("Laps");
  lp.appendChild(lpcont);
  row.appendChild(lp);
  let nat=document.createElement("td");
  let contnat=document.createTextNode("Time");
  nat.appendChild(contnat);
  row.appendChild(nat);
  let pts=document.createElement("td");
  let contpts=document.createTextNode("Points");
  pts.appendChild(contpts);
  row.appendChild(pts);
  content.appendChild(row);
});
chrome.storage.sync.get("Rest",  (results)=>{
  //build the header
  
 
  let list= results.Rest;
 
  for(i=0;i<list.length;i++){
    let r=document.createElement("tr");
    for (j=0;j<list[i].length-1;j++){
      let cell=document.createElement("td");
      let cont=document.createTextNode(list[i][j]);
      cell.appendChild(cont);
      r.appendChild(cell);
    }
    content.appendChild(r);
  }
  });

}
function refresh(){
  let ids =[];
  let d=new Date();
 
  chrome.tabs.create({url: "https://www.formula1.com/en/results.html/"+d.getFullYear()+"/drivers.html", active: false}, async (tab) =>{
      //window.alert("hi");
  await chrome.scripting.executeScript({
      target:{tabId: tab.id},
      files:["driveScript.js"],
    }); 
        chrome.tabs.remove(tab.id);
      });
    
  
  chrome.tabs.create({url:"https://www.formula1.com/en/results.html/"+d.getFullYear()+"/team.html", active: false}, async (tab) =>{
   await chrome.scripting.executeScript({
    target:{tabId: tab.id},
    files:["constructcript.js"],
  }); 
  chrome.tabs.remove(tab.id);
  
});

  chrome.tabs.create({url:"https://www.formula1.com/en/results.html/"+d.getFullYear()+"/races.html", active: false}, async (tab) =>{
    await chrome.scripting.executeScript({
    target:{tabId: tab.id},
    files:["lastRace.js"],
  });
  chrome.tabs.remove(tab.id);
   
    

 chrome.storage.sync.get("LR", (info)=>{
let link=info.LR;
chrome.tabs.create({url: link, active: false}, async (tab) =>{
    await chrome.scripting.executeScript({
    target:{tabId: tab.id},
    files:["lastRaceScript.js"]
  }); 
  chrome.tabs.remove(tab.id);
    
});
});


});

}
/*
<tr id="selectors">
        <th id="d" ><button id="db">
          Drivers Championship
          </button>
        </th>
        <th id="c">
          <button id="cb" >
            Constructors Championship
          </button>
          
        </th>
        <th id="l">
          <button id="lb">
            Last Race
          </button>
        </th>
      </tr>
<tr id="settings">
        <td>
          <button id="re">
          Refresh
        </button></td>
      </tr>


      "content_scripts": [
    {
      "matches":[ "https://www.formula1.com/en/*"],
     "js": [
       "driveScript.js",
        "constructcript.js",
       "lastRace.js",
       "lastRaceScript.js"
      ]
}],
*/
