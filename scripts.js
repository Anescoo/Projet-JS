const app = document.getElementById('root');

const logo = document.createElement('img');
logo.src = 'logo.png';

const container = document.createElement('div'); // on créer un élément contenaire qui contiendra
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

      // Heroes Name
      const CardHeroName = document.createElement('h1');
      CardHeroName.textContent = heroes.name;

      //Full Name 
      const CardFullName = document.createElement('p');
      heroes.biography.fullName = heroes.biography.fullName.substring(0, 300);
      CardFullName.textContent = `${heroes.biography.fullName}...`;
      
      // Place of birth 
      const CardPlaceOfBirth = document.createElement('p')
      heroes.biography.placeOfBirth = heroes.biography.placeOfBirth.substring(0, 300);
      CardPlaceOfBirth.textContent = `${heroes.biography.placeOfBirth}...`;
     
      // Gender 
      const CardGender = document.createElement('p')
      heroes.appearance.gender = heroes.appearance.gender.substring(0, 300);
      CardGender.textContent = `${heroes.appearance.gender}...`;
     
      /* #################### 
      
      On ajoute aux cartes les informations des héros */
      
      container.appendChild(card); // les cartes sont ajoutées dans le contenaire de l'application
      card.appendChild(CardHeroName);
      card.appendChild(CardFullName);
      card.appendChild(CardPlaceOfBirth);
      card.appendChild(CardGender);
    });

    // Gestion des erreures
  } else {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = `Il ya un probleme`;
    app.appendChild(errorMessage);
  }
}

request.send();

/* -- Fonctione de tri de la barre de recherche récupérée -- */

function SearchBarTri() {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
          li[i].style.display = "";
      } else {
          li[i].style.display = "none";
      }
  }
}