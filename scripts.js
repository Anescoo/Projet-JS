/* -- Fonctione de tri de la barre de recherche récupérée -- */
function SearchBarTri() {
  let filter = document.getElementById('filter').value.toUpperCase();
  
  let tableRecord = document.getElementById('tableRecord');
  
  let tr = tableRecord.getElementsByTagName('div');
  let thead = tableRecord.getElementsByTagName('h1');

  for(var i = 0;i<thead.length;i++){
    let td = thead[i];
    if(td){
      let textvalue = td.textContent || td.innerHTML;

      if(textvalue.toUpperCase().indexOf(filter) > -1){
        thead[i].style.display="";
        tr[i].style.display="";

      }else{
        thead[i].style.display= "none";
        tr[i].style.display= "none";

      }
    }
  }
}

const app = document.getElementById('root');

const logo = document.createElement('img');
logo.src = 'logo.png';

const container = document.createElement('div');
container.setAttribute('id','tableRecord');
container.setAttribute('class', 'container');

app.appendChild(logo);
app.appendChild(container); // on ajoute les contenaires à la racine de l'application

// application de l'API 
var request = new XMLHttpRequest(); 
request.open('GET', 'https://rawcdn.githack.com/akabab/superhero-api/0.2.0/api/all.json', true);
request.onload = function () {

  // On créer des cartes qui vont affcicher les informations de manière claires pour l'utilisateur
  
  var dataJSON = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) { //si aucune erreur
    dataJSON.forEach(heroes => {                      // pour tous les héros du json
      const card = document.createElement('div');     // on créé un élément carte sous forme de div qui
      card.setAttribute('class', 'card');             // a un attribut class et carte (pour le CSS notamment)
     

     /* ############ 

     On créer des variables de chaque données de héro récupérées depuis le JSON */

     // Image hero
     const CardHeroPicture = document.createElement('img')
     CardHeroPicture.src = heroes.images.xs

      // Heroes Name
      const CardHeroName = document.createElement('h1');
      CardHeroName.textContent = heroes.name;

      //Full Name 
      const CardFullName = document.createElement('p');
      heroes.biography.fullName = heroes.biography.fullName;
      CardFullName.textContent = 'Full Name : ' + `${heroes.biography.fullName}`;
      
      // Place of birth 
      const CardPlaceOfBirth = document.createElement('p')
      heroes.biography.placeOfBirth = heroes.biography.placeOfBirth;
      CardPlaceOfBirth.textContent = 'Place of birth : '+ `${heroes.biography.placeOfBirth}`;
     
      // Gender 
      const CardGender = document.createElement('p')
      heroes.appearance.gender = heroes.appearance.gender;
      CardGender.textContent = 'Gender : '+`${heroes.appearance.gender}`;
      
      // Power Stats 
      const CardHeroPowerStats = document.createElement('p')
      Object.entries(heroes.powerstats).forEach(([key, value]) => CardHeroPowerStats.textContent+=' '+(`${key}: ${value}`));
      ///for (const property in heroes.powerstats){
      // heroes.powerstats = heroes.powerstats;
      //CardHeroPowerStats.textContent = `${Object.entries(heroes.powerstats)}...`;
      ///CardHeroPowerStats.textContent = `${heroes.powerstats[property]}`;
    
    // Race
    const CardRace = document.createElement('p')
    heroes.appearance.race = heroes.appearance.race;
    CardRace.textContent = 'Race : ' + `${heroes.appearance.race}`
    // Alignement 
    const CardAlignment = document.createElement('p')
    heroes.biography.alignment = heroes.biography.alignment;
    CardAlignment.textContent = 'Alignement : '+ `${heroes.biography.alignment}`;
   
    // height 
    const CardHeight = document.createElement('p')
    heroes.appearance.height = heroes.appearance.height;
    CardHeight.textContent = 'Heigth : '+ `${heroes.appearance.height}`;

     // weight 
     const CardWeight = document.createElement('p')
     heroes.appearance.weight = heroes.appearance.weight;
     CardWeight.textContent = 'Weigth : '+ `${heroes.appearance.weight}`;// Heroes Name

      /* #################### 
      
      On ajoute aux cartes les informations des héros */
      
      container.appendChild(card); // les cartes sont ajoutées dans le contenaire de l'application
      card.appendChild(CardHeroName);
      card.appendChild(CardHeroPicture);
      card.appendChild(CardFullName);
      card.appendChild(CardPlaceOfBirth);
      card.appendChild(CardGender);
      card.appendChild(CardHeroPowerStats);
      card.appendChild(CardRace);
      card.appendChild(CardAlignment);
      card.appendChild(CardHeight);
      card.appendChild(CardWeight);
    });

    // Gestion des erreures
  } else {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = `Il ya un probleme`;
    app.appendChild(errorMessage);
  }
}

request.send();
