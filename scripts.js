/* -- Fonctione de tri de la barre de recherche récupérée -- */
function SearchBar() {
  let filter = document.getElementById('filter').value.toUpperCase();
  
  let tableRecord = document.getElementById('tableRecord');
  
  let tr = tableRecord.getElementsByTagName('tr');
  let thead = tableRecord.getElementsByTagName('thead');

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

const container = document.createElement('table');
container.setAttribute('id','tableRecord');
container.setAttribute('class', 'container');

const filtre = document.createElement('thead')
filtre.setAttribute('class','filtre')
app.appendChild(logo);
app.appendChild(container);

const title = document.createElement('tr')
title.textContent = 'Nom'
filtre.appendChild(title)

const image = document.createElement('th')
image.textContent = 'img'
title.appendChild(image)

const fullName = document.createElement('th')
fullName.textContent = 'Full Name '
title.appendChild(fullName)

const Pbirth = document.createElement('th')
Pbirth.textContent = 'Place of birth '
title.appendChild(Pbirth)

const gender = document.createElement('th')
gender.textContent = 'Gender'
title.appendChild(gender)

const Pstats = document.createElement('th')
Pstats.textContent = 'Power Stats'
title.appendChild(Pstats)

const race = document.createElement('th')
race.textContent = 'Race '
title.appendChild(race)

const align = document.createElement('th')
align.textContent = 'Alignement'
title.appendChild(align)

const height = document.createElement('th')
height.textContent = 'Height'
title.appendChild(height)

const weight = document.createElement('th')
weight.textContent = 'Weight'
title.appendChild(weight)


container.appendChild(filtre)

// application de l'API 

var request = new XMLHttpRequest();
request.open('GET', 'https://rawcdn.githack.com/akabab/superhero-api/0.2.0/api/all.json', true);
request.onload = function () {

  // On commence à accèder aux données JSON 
  
  var data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
    
    let elements = 25;
    let pageActuelle = 1;
    let nbPage = Math.ceil(data.length/elements);
    
    let dataActuelle = data.slice((pageActuelle - 1) * elements, pageActuelle * elements)

    dataActuelle.forEach(heroes => {
      
      // On créer des cartes qui vont affciccher les informations de manière claires pour l'utilisateur
      const card = document.createElement('tr');
      card.setAttribute('class', 'card');
     // Image hero
     
      const img = document.createElement('td')
      const im =document.createElement('img')

      img.appendChild(im)

      im.src = heroes.images.xs
      // Heroes Name
      const HeroTitle = document.createElement('thead');
      HeroTitle.setAttribute('class','hero')
      HeroTitle.textContent = heroes.name;

      //Full Name 
      const Fname = document.createElement('td');
      heroes.biography.fullName = heroes.biography.fullName;
      Fname.textContent =  `${heroes.biography.fullName}`;
      
      // Place of birth 
      const Place = document.createElement('td')
      heroes.biography.placeOfBirth = heroes.biography.placeOfBirth;
      Place.textContent = `${heroes.biography.placeOfBirth}`;
     
      // Gender 
      const Gender = document.createElement('td')
      heroes.appearance.gender = heroes.appearance.gender;
      Gender.textContent = `${heroes.appearance.gender}`;
      
      // Power Stats 
      const Power = document.createElement('td')
      Object.entries(heroes.powerstats).forEach(([key, value]) => Power.textContent+=' '+(`${key}: ${value}`));
      ///for (const property in heroes.powerstats){
      // heroes.powerstats = heroes.powerstats;
      //b.textContent = `${Object.entries(heroes.powerstats)}...`;
      ///b.textContent = `${heroes.powerstats[property]}`;
    
    // Race
    const Race = document.createElement('td')
    heroes.appearance.race = heroes.appearance.race;
    Race.textContent = `${heroes.appearance.race}`
    // Alignement 
    const Align = document.createElement('td')
    heroes.biography.alignment = heroes.biography.alignment;
    Align.textContent = `${heroes.biography.alignment}`;
   
    // height 
    const Height = document.createElement('td')
    heroes.appearance.height = heroes.appearance.height;
    Height.textContent = `${heroes.appearance.height}`;

     // weight 
     const Weight = document.createElement('td')
     heroes.appearance.weight = heroes.appearance.weight;
     Weight.textContent = `${heroes.appearance.weight}`;

     /*On ajoute aux cartes les informations des héros */
      container.appendChild(card);
      card.appendChild(HeroTitle);
      card.appendChild(img);
      card.appendChild(Fname);
      card.appendChild(Place);
      card.appendChild(Gender);
      card.appendChild(Power);
      card.appendChild(Race);
      card.appendChild(Align);
      card.appendChild(Height);
      card.appendChild(Weight);
      
    });
    // Gestion des erreur
  } else {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = `Il ya un probleme`;
    app.appendChild(errorMessage);
  }
}

request.send();

//// first try on multi pages


