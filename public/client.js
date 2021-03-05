// client-side js
// run by the browser each time your view template referencing it is loaded

console.log("begin...");

const nom = [];

// define variables that reference elements on our page
const lombriForm = document.forms[0];
const lombriInput = lombriForm.elements["lombricomposteur"];
const lombriList = document.getElementById("id");
const clearButton = document.querySelector('#clear-dreams');


////// Getters
// request the dreams from our app's sqlite database
fetch("/getLombris", {})
  .then(res => res.json())
  .then(response => {
    response.forEach(row => {
      appendNewNom(row.nom);
    });
  });

////// Formulaire
//function searchLombriForm(){
//  var element = document.querySelector("form");
//  var span = document.createElement("div");
//    span.className="getLombriForm";
//var form = document.createElement("form");
//orm.innerHTML='';
//    form.method="GET";
//    form.action="/searchLombri";
//var button = document.createElement("button");
//    button.innerHTML='';
//    button.type="submit";
//    button.id="submitSearchLombri";
//form.appendChild(button);
//span.appendChild(form);
//element.appendChild(span);
//
function mainMenu(){
  var element = document.querySelector("menu");
  var menu = document.createElement("menu");
      menu.innerHTML='';
      menu.type="toolbar";
      menu.label="mainMenu";
  var btn = document.createElement("button");
      btn.innerHTML='';
      btn.type="submit";
      btn.method="GET";
      btn.action="/access";
  var btn = document.createElement("button");
      btn.innerHTML='';
      btn.type="submit";
      btn.method="GET";
      btn.action="/addLombri";
  var btn = document.createElement("button");
      btn.innerHTML='';
      btn.type="submit";
      btn.method="GET";
      btn.action="/changeLombri";
  var btn = document.createElement("button");
      btn.innerHTML='';
      btn.type="submit";
      btn.method="GET";
      btn.action="/alertLombri";
  menu.appendChild(btn);
  element.appendChild(menu);
}
//mainMenu();

function addLombriForm(){
  var element = document.querySelector("form");
  var span = document.createElement("div");
      span.className="addLombriForm";
  var form = document.createElement("form");
      form.innerHTML='';
      form.method="POST";
      form.action="/addLombri";
  var input = document.createElement("input");
      input.innerHTML='';
      input.type="text";
      input.name="nom";
      input.placeholder="Nom";
  var input = document.createElement("input");
      input.innerHTML='';
      input.type="text";
      input.name="adresse";
      input.placeholder="Adresse";
  var input = document.createElement("input");
      input.innerHTML='';
      input.type="text";
      input.name="cp";
      input.placeholder="Code Postal";
  var input = document.createElement("input");
      input.innerHTML='';
      input.type="text";
      input.name="date_install";
      input.placeholder="Date d'installation";
  var input = document.createElement("input");
      input.innerHTML='';
      input.type="text";
      input.name="structure";
      input.placeholder="Structure";
  var input = document.createElement("input");
      input.innerHTML='';
      input.type="text";
      input.name="capacite";
      input.placeholder="Capacité (en tonnes)";
  var input = document.createElement("input");
      input.innerHTML='';
      input.type="text";
      input.name="taux_util";
      input.placeholder="Taux d'utilisation (en %)";
  var input = document.createElement("input");
      input.innerHTML='';
      input.type="text";
      input.name="tonnage_traite";
      input.placeholder="Tonnage traité";
  var input = document.createElement("input");
      input.innerHTML='';
      input.type="text";
      input.name="contributeur";
      input.placeholder="Contributeur";
  var input = document.createElement("input");
      input.innerHTML='';
      input.type="text";
      input.name="cadenas";
      input.placeholder="Code cadenas";
  var input = document.createElement("input");
      input.innerHTML='';
      input.type="text";
      input.name="frequence";
      input.placeholder="Fréquence tournée (en jours)";
  var input = document.createElement("input");
      input.innerHTML='';
      input.type="text";
      input.name="suivi";
      input.placeholder="Date du dernier passage";
  var input = document.createElement("input");
      input.innerHTML='';
      input.type="text";
      input.name="remarque";
      input.placeholder="Remarques";
  var input = document.createElement("input");
      input.innerHTML='';
      input.type="text";
      input.name="recolte";
      input.placeholder="Date de récolte";
  var input = document.createElement("input");
      input.innerHTML='';
      input.type="text";
      input.name="contact";
      input.placeholder="Contact sur place";
  var input = document.createElement("input");
      input.innerHTML='';
      input.type="text";
      input.name="responsable_site";
      input.placeholder="Responsable sur site";
  var input = document.createElement("input");
      input.innerHTML='';
      input.type="text";
      input.name="responsable_eisenia";
      input.placeholder="Responsable Eisenia";
  var input = document.createElement("input");
      input.innerHTML='';
      input.type="text";
      input.name="confinement";
      input.placeholder="Remarques liées au confinement";
  var button = document.createElement("button");
      button.innerHTML='';
      button.type="submit";
      button.id="submitAddLombri";
  form.appendChild(input);
  span.appendChild(form);
  element.appendChild(span);   
}

function getLombriForm(){
  var element = document.querySelector("form");
  var span = document.createElement("div"); 
      span.className="getLombriForm";
  var form = document.createElement("form"); 
      form.innerHTML=''; 
      form.method="POST";
      form.action="/lombriNom";
  var select = document.createElement("select");
      select.innerHTML='';
      select.id="select";
      select.name="nom";
      select.size='1';
  var option = document.createElement("option");
      option.innerHTML='';
      option.name="nom";
      //option.setAttributeNode("nom");
  var button = document.createElement("button");
      button.innerHTML='';
      button.type="submit";
      button.id="submitGetLombri";
  select.appendChild(option);
  form.appendChild(select);
  span.appendChild(form);
  element.appendChild(span);   
}

function seeLombriTable(){
  var element = document.querySelector('table');
  var span = document.createElement("div");
      span.className="seeLombriTable";
  var table = document.createElement("table");
      table.innerHTML='';
      table.id="seeLombriTable";
  var tr = document.createElement("tr"); tr.innerHTML='';
    var td = document.createElement("td"); td.innerHTML='';
    var td = document.createElement("td"); td.innerHTML='';
    var td = document.createElement("td"); td.innerHTML='';
  var tr = document.createElement("tr"); tr.innerHTML='';
    var td = document.createElement("td"); td.innerHTML='';
    var td = document.createElement("td"); td.innerHTML='';
    var td = document.createElement("td"); td.innerHTML='';
  var tr = document.createElement("tr"); tr.innerHTML='';
    var td = document.createElement("td"); td.innerHTML='';
    var td = document.createElement("td"); td.innerHTML='';
    var td = document.createElement("td"); td.innerHTML='';
  var tr = document.createElement("tr"); tr.innerHTML='';
    var td = document.createElement("td"); td.innerHTML='';
    var td = document.createElement("td"); td.innerHTML='';
    var td = document.createElement("td"); td.innerHTML='';
  var tr = document.createElement("tr"); tr.innerHTML='';
    var td = document.createElement("td"); td.innerHTML='';
    var td = document.createElement("td"); td.innerHTML='';
    var td = document.createElement("td"); td.innerHTML='';
  var tr = document.createElement("tr"); tr.innerHTML='';
    var td = document.createElement("td"); td.innerHTML='';
    var td = document.createElement("td"); td.innerHTML='';
    var td = document.createElement("td"); td.innerHTML='';
  var tr = document.createElement("tr"); tr.innerHTML='';
    var td = document.createElement("td"); td.innerHTML='';
    var td = document.createElement("td"); td.innerHTML='';
  var form = document.createElement("form");
      form.innerHTML='';
      form.method="GET";
      form.action="/changeLombri";
  var button = document.createElement("button");
      button.type="submit";
      button.id="submitChangeLombri";
  var td = document.createElement("td");
      td.innerHTML='';
  form.appendChild(button);
  td.appendChild(form);
  tr.appendChild(td);
  table.appendChild(tr);
  span.appendChild(table);
  element.appendChild(span);
}

// a helper function that creates a list item for a given dream
const appendNewNom = nomList => {
  const newListItem = document.createElement("li");
  newListItem.innerText = nomList;
  nomList.appendChild(newListItem);
};

//searchLombriForm();
//getLombriForm();
//addLombriForm();
//seeLombriTable();


// clearButton.addEventListener('click', event => {
//  fetch("/clearDreams", {})
//    .then(res => res.json())
//    .then(response => {
//      console.log("cleared dreams");
//    });
//  dreamsList.innerHTML = "";
//}); 
