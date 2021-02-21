// server.js
// where your node app starts

// init project
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const knex = require('knex')({
  client: 'sqlite3',
  connection: {
      filename: ".data/lombridb.sqlite3"
  },
  useNullAsDefault:true,
  debug: true,
});
const consolidate = require('consolidate');
const expressAsyncErrors = require('express-async-errors');
const session = require('express-session');
// const fs = require("fs");
// const dbFile = ".data/lombriDB.sqlite3";
// const dbFile = ""./.data/sqlite.db"
// const exists = fs.existsSync(dbFile);
// const sqlite3 = require("sqlite3").verbose();
// const db = new sqlite3.Database(dbFile);
var id = 0;
////////////////////////////////////////////////


app.use('/s', express.static('views'))
  .use(bodyParser.urlencoded({ extended: false }))
  .engine('html', consolidate.nunjucks)
  .set('view engine', 'nunjucks')
  .use(bodyParser.json());

// we've started you off with Express,
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

//app.listen(process.env.PORT);
app.listen(process.env.PORT, () => {
  console.log(`L'application est démarrée`);
});

//******************************************************************************************************************************** */
//HANDLERS
app.all('/',async function(req,res){
  console.log(`Ok /`);
  id = 0;
  res.render(__dirname+'/views/lombrideisenia.html', {"id" : id});
  //if(id=0){
//    res.redirect('/access')
//  }
//  if(id=1){
//    let lombriNom ="";
//    lombriNom = await knex.select('nom')
//                        .from('Lombricomposteur')
//  res.render(__dirname+'/views/lombrideisenia.html', {"lombriNom" : lombriNom});
//  res.redirect('/lombriNom');
//  }
});

app.get('/access', async function(req,res){
  id = 1;
  var lombriNom = '';
  lombriNom = await knex.select('nom')
                        .from('Lombricomposteur')
                        .orderBy('cp');
  res.render(__dirname+'/views/lombrideisenia.html', {"lombriNom" : lombriNom,
                                                      "id" : id});
  console.log(req.body);
});

//app.get('/searchLombri', async function(req, res){
//        res.redirect('/lombriNom');
//});

app.post('/lombriNom', async function(req, res){
      id=3;
      console.log(req.body);
      let lombri ="";
      lombri = await knex.raw('SELECT * FROM Lombricomposteur WHERE nom = ?', 
                              [req.body.nom]);
      //lombri = await knex.select('*')
      //                  .from('Lombricomposteur')
      //                  .where('nom', req.body.nom);
      res.render(__dirname+'/views/lombrideisenia.html', {"lombri" : lombri,
                                                         "id" : id});
})

app.get('/seeLombri', async function(req, res){
        //lombri = await knex.select('*')
        //                  .from('Lombricomposteur')
        //                  .where('nom', [ req.body.nom]);
})

app.get('/addLombri', async function(req, res){
  id = 2;
  res.render(__dirname+'/views/lombrideisenia.html', {'id' : id});
})
app.post('/addLombri', async function(req,res){
  id = 2;
  try{
      await knex.raw('INSERT INTO Lombricomposteur (nom, adresse, cp, date_install, structure, capacite, taux_util, tonnage_traite, contributeur, cadenas, frequence, suivi, remarque, recolte, contact, responsable_site, responsable_eisenia, confinement) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
                    [req.body.nom, req.body.adresse, req.body.cp, req.body.date_install, 
                     req.body.structure, req.body.capacite, req.body.taux_util,
                     req.body.tonnage_traite, req.body.contributeur, req.body.cadenas,
                     req.body.frequence, req.body.suivi, req.body.remarque, req.body.recolte,
                     req.body.contact, req.body.responsable_site, req.body.responsable_eisenia,
                     req.body.confinement]);
    }catch(error){
      console.error(error);
      res.redirect('/');
    }   
    console.log('Lombricomposteur ajouté !');
    res.redirect('/');
})

app.get('/changeLombri', async function(req, res){
  id = 4; 
  var lombriNom = '';
  lombriNom = await knex.select('nom')
                        .from('Lombricomposteur')
                        .orderBy('cp');
  res.render(__dirname+'/views/lombrideisenia.html', {"lombriNom" : lombriNom,
                                                      "id" : id});
})
app.post('/changeLombri', async function(req, res){
  id = 4;
  try{
      await knex.raw('UPDATE Lombricomposteur SET cadenas = ? WHERE nom = ?',
                    [req.body.cadenas, req.body.nom]);
    }catch(error){
      console.error(error);
      res.redirect('/');
    }   
    console.log('Lombricomposteur modifié !');
    res.redirect('/');
})
//********************************************************************************************************************************



// if ./.data/sqlite.db does not exist, create it, otherwise print records to console
//db.serialize(() => {
//  if (!exists) {
 //   db.run(
 //     "CREATE TABLE Lombricomposteur  (id INTEGER PRIMARY KEY AUTOINCREMENT, nom VARCHAR(255), adresse VARCHAR(255), cp INTEGER, date_install VARCHAR(10), structure VARCHAR(30), capacite FLOAT, taux_util INTEGER, tonnage_traite FLOAT, contributeur VARCHAR(255)? cadenas VARCHAR(255), frequence INTEGER, suisvi VARCHAR(10), remarque VARCHAR(255), recolte VARCHAR(10), contact VARCHAR(255), responsable_site VARCHAR(255), responsable_eisenia VARCHAR(255), confinement VARCHAR(255))"
 //   );
 //   console.log("Lombricomposteur crée !");

    // insert default dreams
 //   db.serialize(() => {
 //     db.run(
 //       'INSERT INTO Lombricomposteur (nom, adresse, cp, date_install, structure, capacite, taux_util, tonnage_traite, contributeur, cadenas, frequence, suivi, remarque, responsable_site, responsable_eisenia) VALUES ("Jean Moulin", "Quai Jean Moulin", 69001, "06/01/2018", "Q", 4.5, 90, 4.05, "56 foyers", "1637",  7, "10/01/2020", "RAS", "Eisenia + Mairie 1er", "Tout le monde")'
 //     );
 //   });
 // } else {
 //   console.log('Database "Lombricomposteur" ready to go!');
 //   db.each("SELECT * from Lombricomposteur", (err, row) => {
 //     if (row) {
 //       console.log(`record: ${row.id}`);
 //     }
 //   });
 // }
 // });

// http://expressjs.com/en/starter/basic-routing.html
//app.get("/", (request, response) => {
//  response.sendFile(`${__dirname}/views/lombrideisenia.html`);
//});

// endpoint to get all the dreams in the database
// app.get("/getLombris", (request, response) => {
//  db.all("SELECT * from Lombricomposteur where nom = (,)",  (err, rows) => {
//    response.send(JSON.stringify(rows));
//  });
//});

//app.get("/getLombri", (request, response) => {
//  db.all("SELECT * from Lombricomposteur where nom = (,)", (err, rows) => {
//    response.send(JSON.stringify(rows));
//  });
//});

// helper function that prevents html/css/script malice
//const cleanseString = function(string) {
//  return string.replace(/</g, "&lt;").replace(/>/g, "&gt;");
//};

