// La base de données pour les lombricomposteurs
// A initialiser une seule fois !

const knex = require('knex')({
    client: 'sqlite3',
    connection: {
        filename: ".data/lombridb.sqlite3"
    },
    useNullAsDefault:true,
    debug: true,
});
async function createLombriTable() {
  try{
    await knex.raw("DROP TABLE IF EXISTS Lombricomposteur");  
    await knex.raw("CREATE TABLE Lombricomposteur  (id INTEGER PRIMARY KEY AUTOINCREMENT, nom VARCHAR(255), adresse VARCHAR(255), cp INTEGER, date_install VARCHAR(10), structure VARCHAR(30), capacite FLOAT, taux_util INTEGER, tonnage_traite FLOAT, contributeur VARCHAR(255), cadenas VARCHAR(255), frequence INTEGER, suivi VARCHAR(10), remarque VARCHAR(255), recolte VARCHAR(10), contact VARCHAR(255), responsable_site VARCHAR(255), responsable_eisenia VARCHAR(255), confinement VARCHAR(255))");
    await knex.raw('INSERT INTO Lombricomposteur (nom, adresse, cp, date_install, structure, capacite, taux_util, tonnage_traite, contributeur, cadenas, frequence, suivi, remarque, responsable_site, responsable_eisenia) VALUES ("Jean Moulin", "Quai Jean Moulin", 69001, "06/01/2018", "Q", 4.5, 90, 4.05, "56 foyers", "1637",  7, "10/01/2020", "RAS", "Eisenia + Mairie 1er", "Tout le monde")');
    await knex.destroy();
  }catch(error){
      console.error(error);
  }
}

createLombriTable();