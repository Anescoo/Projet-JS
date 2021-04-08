/* -- Fonctione de tri de la barre de recherche récupérée -- */

function searchBar() {
  let filter = document.getElementById('filter').value.toUpperCase();
  
  let tableRecord = document.getElementById('tableRecord');

  let thead = tableRecord.getElementsByTagName('tr');

  for(var i = 0;i<thead.length;i++){
    let td = thead[i];
    if(td){
      let textvalue = td.textContent || td.innerHTML;

      if(textvalue.toUpperCase().indexOf(filter) > -1){
        thead[i].style.display="";
      }else{
        thead[i].style.display= "none";
      }
    }
  }
}

=======

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

const bar = document.createElement('tr');
bar.appendChild(filtre)

// Nos TH (titre de colonne)

const title = document.createElement('th');
title.textContent = 'Nom';
filtre.appendChild(title);

const image = document.createElement('th');
image.textContent = 'img';
filtre.appendChild(image);

const fullName = document.createElement('th');
fullName.textContent = 'Full Name ';
filtre.appendChild(fullName);

const Pbirth = document.createElement('th');
Pbirth.textContent = 'Place of birth ';
filtre.appendChild(Pbirth);

const gender = document.createElement('th');
gender.textContent = 'Gender';
filtre.appendChild(gender);

const intelligence = document.createElement('th');
intelligence.textContent = 'Intelligence';
filtre.appendChild(intelligence);

const strength = document.createElement('th');
strength.textContent = 'Strength';
filtre.appendChild(strength);

const speed = document.createElement('th');
speed.textContent = 'Speed';
filtre.appendChild(speed);

const durability = document.createElement('th');
durability.textContent = 'Durability';
filtre.appendChild(durability);

const power = document.createElement('th');
power.textContent = 'Power';
filtre.appendChild(power);

const combat = document.createElement('th');
combat.textContent = 'Combat';
filtre.appendChild(combat);

const race = document.createElement('th');
race.textContent = 'Race ';
filtre.appendChild(race);

const align = document.createElement('th');
align.textContent = 'Alignement';
filtre.appendChild(align);

const height = document.createElement('th');
height.textContent = 'Height';
filtre.appendChild(height);

const weight = document.createElement('th');
weight.textContent = 'Weight';
filtre.appendChild(weight);

container.appendChild(filtre);



// application de l'API 

var request = new XMLHttpRequest();
request.open('GET', 'https://rawcdn.githack.com/akabab/superhero-api/0.2.0/api/all.json', true);
request.onload = function () {

  // On commence à accèder aux données JSON 

  var data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
    
    // 

    let elements = 20;
    let pageActuelle = 1;
    let dataActuelle = data.slice((pageActuelle - 1) * elements, pageActuelle * elements);
    
    // affiche les boutons

    const nbPages = 29  // 563/20 = 28.15 par défaut, la dernière page affichera le dernier héro
    for(let i = 1; i<=nbPages; i++){
      const button = document.createElement('button');
      button.innerHTML = i;
      button.addEventListener('click', function(){
        console.log('load page '+this.innerHTML);
      })
      document.body.appendChild(button)
    }

    // une fois la page sélectionnée on doit remove les éléments avant de réafficher les autres

    document.querySelectorAll('tr.card').forEach(elements => elements.remove());

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

      const HeroTitle = document.createElement('td');

      HeroTitle.setAttribute('class','hero')
      HeroTitle.textContent = heroes.name;

      //Full Name 
      const Fname = document.createElement('td');

      Fname.textContent =  `${heroes.biography.fullName}`;
      
      // Place of birth 
      const Place = document.createElement('td')

      Place.textContent = `${heroes.biography.placeOfBirth}`;
     
      // Gender 
      const Gender = document.createElement('td')

      Gender.textContent = `${heroes.appearance.gender}`;
      //Intelligence
      
      // Power Stats 
      const intel = document.createElement('td');
      intel.textContent = `${heroes.powerstats.intelligence}`;

      const streng = document.createElement('td'); 
      streng.textContent = `${heroes.powerstats.strength}`;

  
      const spee = document.createElement('td'); 
      spee.textContent = `${heroes.powerstats.speed}`

      const durab = document.createElement('td'); 
      durab.textContent = `${heroes.powerstats.durability}`

      const pow = document.createElement('td'); 
      pow.textContent = `${heroes.powerstats.power}`

      const comb = document.createElement('td'); 
      comb.textContent = `${heroes.powerstats.combat}`
    
    // Race
    const Race = document.createElement('td');
    heroes.appearance.race = heroes.appearance.race;
    Race.textContent = `${heroes.appearance.race}`;
    // Alignement 
    const Align = document.createElement('td');
    Align.textContent = `${heroes.biography.alignment}`;
   
    // height 
    const Height = document.createElement('td');
    Height.textContent = `${heroes.appearance.height}`;

     // weight 
     const Weight = document.createElement('td');
     Weight.textContent = `${heroes.appearance.weight}`;

     /*On ajoute aux cartes les informations des héros */
      //container.appendChild(card);

      card.appendChild(HeroTitle);
      card.appendChild(img);
      card.appendChild(Fname);
      card.appendChild(Place);
      card.appendChild(Gender);

      card.appendChild(intel);
      card.appendChild(streng);
      card.appendChild(spee);
      card.appendChild(durab);
      card.appendChild(pow);
      card.appendChild(comb);

      card.appendChild(Race);
      card.appendChild(Align);
      card.appendChild(Height);
      card.appendChild(Weight);

      tbody.appendChild(card);
    });
    
    container.appendChild(tbody);

    // Triage
    const compare = function(ids, asc){
  return function(row1, row2){
    const tdValue = function(row, ids){
      return row.children[ids].textContent;
    }
    const tri = function(v1, v2){
      if (v1 !== '' && v2 !== '' && !isNaN(v1) && !isNaN(v2)){
        return v1 - v2;
      }
      else {
        return v1.toString().localeCompare(v2);
      }
    };
    return tri(tdValue(asc ? row1 : row2, ids), tdValue(asc ? row2 : row1, ids));
  }
}
    
    const tbody2 = document.querySelector('tbody');
    const thx = document.querySelectorAll('th');
    const trxb = tbody2.querySelectorAll('tr');
    thx.forEach(th => th.addEventListener('click', () => {
      let classe = Array.from(trxb).sort(compare(Array.from(thx).indexOf(th), this.asc = !this.asc));
      classe.forEach(tr => tbody2.appendChild(tr));
    }));
    // Gestion des erreur
  } else {
    const body =document.getElementsByTagName('body');
    const errorMessage = document.createElement('h1');
    errorMessage.textContent = 'Il ya un probleme';
    body.appendChild(errorMessage);
  }
}

request.send();

